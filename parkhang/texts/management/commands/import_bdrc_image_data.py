import re
import csv

from django.core.management.base import BaseCommand

from texts.models import Source, Text, Witness



class Command(BaseCommand):
    IMAGE_START_KEY = "bdrcimg"

    def add_arguments(self, parser):
        parser.add_argument('csv_file', nargs='?')
        parser.add_argument('source_name', nargs='?')

    def handle(self, *args, **options):
        csv_filepath = options['csv_file']
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
                text_name = row["མཚན་བྱང་རྐྱང་པ།"].strip(" །")
                first_image = row["First Images"]
                if first_image:
                    try:
                        text = Text.objects.get(name=text_name)
                        witness = Witness.objects.get(text=text, source=source)
                        properties = witness.properties
                        if not properties:
                            properties = {}
                        matches = re.findall(".*\:\:([\d]+).*", first_image)
                        if (len(matches) is 1):
                            properties[self.IMAGE_START_KEY] = matches[0]
                        witness.properties = properties
                        witness.save()
                        text_data[text_name] = first_image
                    except Exception as e:
                        print(f"Exception with {text_name}: {e}")
                        pass

        print(f"Found {len(text_data)} texts")