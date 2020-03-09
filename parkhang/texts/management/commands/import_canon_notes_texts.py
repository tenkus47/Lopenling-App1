import os
import subprocess
import shlex
from openpyxl import load_workbook

from django.core.management.base import BaseCommand

from texts.models import Text, Source, Witness, Annotation, AnnotationType
from texts.utils.parse_word_diff import parse_word_diff
from texts.utils.normalise_string import normalise_string
from texts.utils.parse_layout_data import parse_layout_data

WORKING_SOURCE_NAME = 'Working'
SOURCE_NAMES = {
    "ཅོ་": "ཅོ་ནེ",
    "པེ་": "པེ་ཅིན",
    "སྣར་": "སྣར་ཐང",
}
BASE_SOURCE_NAME = "སྡེ་དགེ"
BASE_FILE_SUFFIX = "_base.txt"

def create_source(source_name, is_base=False, is_working=False):
    source = Source()
    source.name = source_name
    source.is_base = is_base
    source.is_working = is_working
    source.save()
    return source

def create_witness(text, source, content):
    witness = Witness()
    witness.text = text
    witness.source = source
    witness.content = content
    witness.save()
    return witness

def get_file_content(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
        return content

class Command(BaseCommand):
    """
    This is for importing text data from the Esukhia/canon_notes repo:
    https://github.com/Esukhia/canon_notes

    It assumes that the data from Esukhia's text list has 
    already been imported:
    https://github.com/Esukhia/nalanda-dergetengyur/blob/master/kunsel-melong.csv
    """

    def add_arguments(self, parser):
        parser.add_argument('source_dir', nargs='?')

    def handle(self, *args, **options):
        source_dir = options['source_dir']
        dir_list = next(os.walk(source_dir))[1]
        sources = {}

        # create base source and witness
        try:
            working_source = Source.objects.get(name=WORKING_SOURCE_NAME)
        except:
            working_source = create_source(WORKING_SOURCE_NAME, False, True)
        
        for source_id in SOURCE_NAMES:
            source_name = SOURCE_NAMES[source_id]
            try:
                source = Source.objects.get(name=source_name)
            except:
                source = create_source(source_name)
            sources[source_name] = source
        
        try:
            base_source = Source.objects.get(name=BASE_SOURCE_NAME)
        except:
            base_source = create_source(BASE_SOURCE_NAME, True)

        for dir in dir_list:
            text_code = dir.lower()
            try:
                text = Text.objects.get(code=text_code)
            except:
                print(f"Missing text for {text_code}")
                continue
            full_dir = os.path.join(source_dir, dir)

            base_text_name = f"{dir}_base.txt"
            base_text_path = os.path.join(full_dir, base_text_name)
            try:
                # NOTE: need to run clean_texts on the dir first
                base_content = get_file_content(base_text_path)
            except Exception as e:
                print("base text error:")
                print(e)
                continue

            try:
                working_witness = Witness.objects.get(text=text, source=working_source)
            except:
                working_witness = create_witness(text, working_source, base_content)

            try:
                base_witness = Witness.objects.get(text=text, source=base_source)
            except:
                base_witness = create_witness(text, base_source, "")

            for source_code in SOURCE_NAMES:
                source_name = SOURCE_NAMES[source_code]
                source_file_name = f"{dir}_{source_code}_layer.txt"
                source_file_path = os.path.join(full_dir, source_file_name)
                try:
                    source = sources[source_name]
                    source_content = get_file_content(source_file_path)
                except:
                    continue
                
                try:
                    source_witness = Witness.object.get(text=text, source=source)
                except:
                    source_witness = create_witness(text, source, "")
                
                # Annotations
                command_args = f'--start-delete="|-" --stop-delete="-/" --aggregate-changes -d "ཿ།།༌་ \n" "{base_text_path}" "{source_file_path}"'
                command = f"dwdiff {command_args}"
                
                try:
                    diff = subprocess.run(shlex.split(command), stdout=subprocess.PIPE, encoding='utf-8').stdout
                except Exception as e:
                    print(e)
                
                try:
                    annotations = parse_word_diff(diff)
                except Exception as e:
                    annotations = []
                    print(f'dir: {dir}, filename: {source_file_path}')

                for annotation_data in annotations:
                    annotation = Annotation()
                    annotation.witness = working_witness
                    annotation.start = annotation_data['start']
                    annotation.length = annotation_data['length']
                    annotation.content = annotation_data['replacement']
                    annotation.creator_witness = source_witness
                    annotation.save()


