import os
import shlex
import subprocess
from collections import defaultdict
from pathlib import Path

from django.core.management.base import BaseCommand
from texts.models import Annotation, AnnotationType, Source, Text, Witness
from texts.utils.parse_layout_data import parse_layout_data
from texts.utils.parse_word_diff import parse_word_diff

WORKING_SOURCE_NAME = "Working"


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument("sources_dir", nargs="?")
        parser.add_argument("base_edition", nargs="?")

    def handle(self, *args, **options):
        source_dir = Path(options["sources_dir"])
        base = options["base_edition"]

        assert source_dir.is_dir()

        source_dirs = list(source_dir.iterdir())
        print(
            "27:source_list", source_dirs
        )  # ['path/Dominant', 'path/པེ་ཅིན', 'path/སྡེ་དགེ', 'path/སྣར་ཐང']

        # TODO: assert if base is in dir_list

        self.texts = {}
        self.base_texts = {}  # filepaths to base texts
        self.working_witnesses = {}  # witnesses that are classes as a base text
        self.base_witnesses = {}  # witnesses that the base was copied from
        self.sources = {}
        self.witnesses = defaultdict(dict)  # {text_name: {source_name: witness}}

        for source in Source.objects.all():
            self.sources[source.name] = source

        # create base source and witness
        working_source, _ = Source.objects.get_or_create(
            name=WORKING_SOURCE_NAME,
            is_working=True,
        )

        for source_dir in source_dirs:
            is_base = True if source_dir.name == base else False
            print("49:", source_dir, is_base)

            if source_dir.name not in self.sources:
                source = Source.objects.create(name=source_dir.name, is_base=is_base)
                self.sources[source_dir.name] = source
            else:
                source = self.sources[source_dir.name]

            print("57:sources{}", self.sources)

            files = next(os.walk(source_dir))[2]
            files = [f.name for f in source_dir.iterdir() if f.suffix == ".txt"]
            print("60:files", files)
            print()

            self.create_variant_annotations(
                source_dir, files, is_base, source, working_source
            )
            self.create_layout_annotations(source_dir, files)

    def create_variant_annotations(
        self, source_dir, files, is_base, source, working_source
    ):
        for filename in files:
            filepath = source_dir / filename

            if "layout" in filename:
                continue

            text_name = Path(filename).stem
            if text_name not in self.texts:
                text = Text()
                text.name = text_name
                text.save()
                self.texts[text_name] = text
            else:
                text = self.texts[text_name]

            if (
                text_name in self.witnesses
                and source_dir.name in self.witnesses[text_name]
            ):
                witness = self.witnesses[text_name][source_dir.name]
            else:
                witness = Witness()
                witness.text = text
                witness.source = source
                witness.save()
                self.witnesses[text_name][source_dir.name] = witness

            if is_base:
                working_witness = witness
                working_witness.text = text
                working_witness.source = working_source
                with open(filepath, "r") as file:
                    content = file.read()
                    working_witness.content = content
                working_witness.save()

                self.base_texts[text_name] = filepath
                self.working_witnesses[text_name] = working_witness
                self.base_witnesses[text_name] = witness

                # there won't be any annotations for the base witness clone
                # or the base witness itself
                continue
            else:
                base_path = self.base_texts[text_name]

            working_witness = self.working_witnesses[text_name]

            command_args = f'--start-delete="|-" --stop-delete="-/" --aggregate-changes -d "ཿ།།༌་ \n" "{base_path}" "{filepath}"'
            command = f"dwdiff {command_args}"

            try:
                diff = subprocess.run(
                    shlex.split(command),
                    stdout=subprocess.PIPE,
                    encoding="utf-8",
                ).stdout
            except Exception as e:
                print(e)

            try:
                annotations = parse_word_diff(diff)
            except Exception as e:
                annotations = []
                print(f"dir: {dir}, filename: {filename}")

            for annotation_data in annotations:
                annotation = Annotation()
                annotation.witness = working_witness
                annotation.start = annotation_data["start"]
                annotation.length = annotation_data["length"]
                annotation.content = annotation_data["replacement"]
                annotation.creator_witness = witness
                annotation.save()

    def create_layout_annotations(self, source_dir, files):
        # Handle `_layout.txt` files
        for filename in files:
            if "layout" not in filename:
                continue

            filepath = os.path.join(source_dir, filename)
            print("144:layout", filepath)
            print()

            text_name = os.path.splitext(filename)[0].replace("_layout", "")
            # for now, assume page breaks are only for the base witness
            # base_origin_witness = base_witnesses[text_name]
            # working_witness = working_witnesses[text_name]
            witness = self.witnesses[text_name][source_dir.name]
            with open(filepath, "r") as file:
                content = file.read()

            pb_count = 0
            page_breaks = parse_layout_data(content)
            for page_break in page_breaks:
                pb_count += 1
                annotation = Annotation()
                annotation.witness = witness
                annotation.start = page_break
                annotation.length = 0
                annotation.content = ""
                annotation.creator_witness = witness
                annotation.type = AnnotationType.page_break.value
                annotation.save()
