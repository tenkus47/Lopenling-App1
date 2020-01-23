import os
import subprocess
import shlex
import re

from django.core.management.base import BaseCommand

from texts.models import Text, Source, Witness, Annotation, AnnotationType
from texts.utils.parse_word_diff import parse_word_diff
from texts.utils.normalise_string import normalise_string
from texts.utils.parse_break_data import parse_break_data

def get_file_content(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
        return content

class Command(BaseCommand):
    """
    This is for importing page and line breaks from the Esukhia/canon_notes repo:
    https://github.com/Esukhia/canon_notes

    Currently this is in:
    https://github.com/Esukhia/canon_notes/4-a-final_formatting/output/4-1-with_corrections

    It assumes that the data from Esukhia's text list has 
    already been imported:
    https://github.com/Esukhia/nalanda-dergetengyur/blob/master/kunsel-melong.csv

    Along with text data:
    https://github.com/Esukhia/canon_notes/tree/final_run/5-layered_texts/output
    """

    def add_arguments(self, parser):
        parser.add_argument('source_dir', nargs='?')

    def handle(self, *args, **options):
        source_dir = options['source_dir']

        working_source = Source.objects.get(is_working=True)
        base_source = Source.objects.get(is_base=True)

        data_files = next(os.walk(source_dir))[2]
        for data_filename in data_files:
            # print(data_filename)
            if not re.match(r'[A-Z][0-9]+\.txt', data_filename):
                continue
            text_code = re.search(r'([A-Z][0-9]+)', data_filename).group(0).lower()
            if text_code != 'd3871':
                continue
            else:
                print("Got D3871")

            try:
                text = Text.objects.get(code=text_code)
                # for now, assume page breaks are only for the base witness
                working_witness = Witness.objects.get(text=text, source=working_source)
                base_witness = Witness.objects.get(text=text, source=base_source)
            except Exception as e:
                continue

            filepath = os.path.join(source_dir, data_filename)

            with open(filepath, 'r') as file:
                content = file.read()
            
            page_breaks, line_breaks = parse_break_data(content)
            
            pb_count = 0
            for page_break in page_breaks:
                pb_count += 1
                annotation = Annotation()
                annotation.witness = working_witness
                annotation.start = page_break
                annotation.length = 0
                annotation.content = ""
                annotation.creator_witness = base_witness
                annotation.type = AnnotationType.page_break.value
                annotation.save()
            
            lb_count = 0
            for line_break in line_breaks:
                lb_count += 1
                annotation = Annotation()
                annotation.witness = working_witness
                annotation.start = line_break
                annotation.length = 0
                annotation.content = ""
                annotation.creator_witness = base_witness
                annotation.type = AnnotationType.line_break.value
                annotation.save()