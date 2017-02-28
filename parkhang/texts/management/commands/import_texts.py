import os
import subprocess
import shlex

from django.core.management.base import BaseCommand

from texts.models import Text, Source, Witness, Annotation
from texts.utils.parse_word_diff import parse_word_diff

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
                if is_base:
                    source.is_default_base_text = True
                else:
                    source.is_default_base_text = False
                source.save()
                sources[dir] = source
            else:
                source = sources[dir]

            files = next(os.walk(full_dir))[2]

            for filename in files:
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

                filepath = os.path.join(full_dir, filename)

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

                command_args = f'--start-delete="|" --stop-delete="|" --aggregate-changes -d "།།༌་ \n" "{base_path}" "{filepath}"'
                command = f"/usr/local/bin/dwdiff {command_args}"

                try:
                    diff = subprocess.run(shlex.split(command), stdout=subprocess.PIPE, encoding='utf-8').stdout
                except Exception as e:
                    print(e)

                try:
                    annotations = parse_word_diff(diff)
                except Exception as e:
                    print(f'dir: {dir}, filename: {filename}')

                for annotation_data in annotations:
                    annotation = Annotation()
                    annotation.witness = base_witness
                    annotation.start = annotation_data['start']
                    annotation.length = annotation_data['length']
                    annotation.content = annotation_data['replacement']
                    annotation.creator_witness = witness
                    annotation.save()
