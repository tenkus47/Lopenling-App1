import os
import subprocess
import shlex

from django.core.management.base import BaseCommand

from texts.models import Text, Source, Witness, Annotation, AnnotationType
from texts.utils.parse_word_diff import parse_word_diff
from texts.utils.normalise_string import normalise_string
from texts.utils.parse_layout_data import parse_layout_data


BASE_SOURCE_NAME = 'Base'


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('source_dir', nargs='?')
        parser.add_argument('base_texts', nargs='?')

    def handle(self, *args, **options):
        source_dir = options['source_dir']
        dir_list = next(os.walk(source_dir))[1]
        base = options['base_texts']
        texts = {}
        base_texts = {} #filepaths to base texts
        base_witnesses = {} # witnesses that are classes as a base text
        sources = {}

        # create base source and witness
        base_source = Source()
        base_source.name = BASE_SOURCE_NAME
        base_source.is_default_base_text = True
        base_source.save()

        # make sure base text is the first witness processed
        sorted_dir_list = []
        for dir in dir_list:
            if dir == base:
                sorted_dir_list.insert(0, dir)
            else:
                sorted_dir_list.append(dir)

        for dir in sorted_dir_list:
            full_dir = os.path.join(source_dir, dir)
            if dir == base:
                is_base = True
            else:
                is_base = False

            if dir not in sources:
                source = Source()
                source.name = dir
                # if is_base:
                #     source.is_default_base_text = True
                # else:
                #     source.is_default_base_text = False
                source.is_default_base_text = False
                source.save()
                sources[dir] = source
            else:
                source = sources[dir]

            if is_base:
                source = base_source

            files = next(os.walk(full_dir))[2]

            for filename in files:
                filepath = os.path.join(full_dir, filename)

                if 'layout' in filename:
                    continue
                else:
                    text_name = os.path.splitext(filename)[0]
                    if text_name not in texts:
                        text = Text()
                        text.name = text_name
                        text.save()
                        texts[text_name] = text
                    else:
                        text = texts[text_name]

                    witness = Witness()
                    witness.text = text
                    witness.source = source

                    if is_base:
                        with open(filepath, 'r') as file:
                            content = file.read()
                            witness.content = content

                        base_texts[text_name] = filepath
                    else:
                        base_path = base_texts[text_name]
                    witness.save()

                    if is_base:
                        base_witnesses[text_name] = witness
                        continue

                    base_witness = base_witnesses[text_name]

                    command_args = f'--start-delete="|-" --stop-delete="-/" --aggregate-changes -d "ཿ།།༌་ \n" "{base_path}" "{filepath}"'
                    command = f"dwdiff {command_args}"

                    try:
                        diff = subprocess.run(shlex.split(command), stdout=subprocess.PIPE, encoding='utf-8').stdout
                    except Exception as e:
                        print(e)

                    try:
                        annotations = parse_word_diff(diff, filename)
                    except Exception as e:
                        annotations = []
                        print(f'dir: {dir}, filename: {filename}')

                    for annotation_data in annotations:
                        annotation = Annotation()
                        annotation.witness = base_witness
                        annotation.start = annotation_data['start']
                        annotation.length = annotation_data['length']
                        annotation.content = annotation_data['replacement']
                        annotation.creator_witness = witness
                        annotation.save()

            for filename in files:
                filepath = os.path.join(full_dir, filename)

                if 'layout' not in filename:
                    continue

                text_name = os.path.splitext(filename)[0].replace('_layout', '')
                # for now, assume page breaks are only for the base witness
                base_witness = base_witnesses[text_name]
                with open(filepath, 'r') as file:
                    content = file.read()

                pb_count = 0
                page_breaks = parse_layout_data(content)
                for page_break in page_breaks:
                    pb_count += 1
                    annotation = Annotation()
                    annotation.witness = base_witness
                    annotation.start = page_break
                    annotation.length = 0
                    annotation.content = pb_count
                    annotation.creator_witness = base_witness
                    annotation.type = AnnotationType.page_break.value
                    annotation.save()


