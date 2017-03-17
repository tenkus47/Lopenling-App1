from django.core.management.base import BaseCommand

from texts.models import Annotation

class Command(BaseCommand):

    def handle(self, *args, **options):
        valid_break_chars = "།།༌་ \n"
        annotations = Annotation.objects.all()

        for annotation in annotations:
            text = annotation.witness.content
            try:
                if len(text) > 0 and annotation.start > 0:
                    # addition at the end of the text
                    if annotation.start == len(text) and annotation.content != "":
                        continue
                    char = text[annotation.start]
                    previous_char = text[annotation.start - 1]
                    if char not in valid_break_chars and previous_char not in valid_break_chars:
                        print(f"Error with annotation {annotation.id}. Start: {annotation.start}; Prev char: {previous_char}; text : {annotation.creator_witness.text.name}; source: {annotation.creator_witness.source.name}")
            except Exception as e:
                print(f"Exception with annotation {annotation.id}. Start: {annotation.start}; Prev char: {previous_char}; text : {annotation.creator_witness.text.name}; source: {annotation.creator_witness.source.name}")
                print(e)

