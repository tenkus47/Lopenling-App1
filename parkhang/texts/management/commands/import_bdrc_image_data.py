import re
import csv

from django.core.management.base import BaseCommand

from texts.models import Source, Text, Witness



class Command(BaseCommand):
    IMAGE_START_PRE_KEY = "bdrcimg_pre"
    IMAGE_START_NUMBER_KEY = "bdrcimg_number"
    IMAGE_START_SUFFIX_KEY = "bdrcimg_suffix"

    def add_arguments(self, parser):
        parser.add_argument('csv_file', nargs='?')
        parser.add_argument('name_column', nargs='?')
        parser.add_argument('start_image_column', nargs='?')
        parser.add_argument('source_name', nargs='?')

    def handle(self, *args, **options):
        csv_filepath = options['csv_file']
        name_column = options['name_column']
        start_image_column = options['start_image_column']
        source_name = options['source_name']
        try:
            source = Source.objects.get(name=source_name)
        except:
            print("No source found")
            exit()

        text_data = {}
        first_row = None
        with open(csv_filepath) as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for row in csv_reader:
                if first_row is None:
                    first_row = row
                    continue
                text_name = row[name_column].strip(" །")
                first_image = row[start_image_column]
                if first_image:
                    try:
                        text = Text.objects.get(name=text_name)
                        witness = Witness.objects.get(text=text, source=source)
                        properties = {}
                        if not properties:
                            properties = {}
                        matches = re.findall("(bdr:[^_]+_[^:]+\:\:.*?)([0-9]+)\.([a-z]{3})", first_image)
                        if (len(matches) is 1):
                            match_groups = matches[0]
                            properties[self.IMAGE_START_PRE_KEY] = match_groups[0]
                            properties[self.IMAGE_START_NUMBER_KEY] = match_groups[1]
                            properties[self.IMAGE_START_SUFFIX_KEY] = match_groups[2]
                        witness.properties = properties
                        witness.save()
                        text_data[text_name] = first_image
                    except Exception as e:
                        print(f"Exception with {text_name}: {e}")
                        pass

        print(f"Found {len(text_data)} texts")