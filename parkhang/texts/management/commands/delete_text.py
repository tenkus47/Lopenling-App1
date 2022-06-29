from django.core.management.base import BaseCommand, CommandError
from texts.models import (Annotation, DefaultWitnessAnnotations, Source, Text,
                          UserAnnotationOperation, Witness)


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('text_ids', nargs='+', type=int)

    @staticmethod
    def delete_all_annotations(witness):
        for ann_model in [Annotation, DefaultWitnessAnnotations, UserAnnotationOperation]:
            ann_model.objects.filter(witness=witness).delete()

    def handle(self, *args, **options):
        for text_id in options["text_ids"]:
            try:
                text = Text.objects.get(pk=text_id)
                witnesses = Witness.objects.filter(text__id=text_id)
                for witness in witnesses:
                    self.delete_all_annotations(witness)
                text.delete()
            except Text.DoesNotExist:
                raise CommandError('Text "%s" does not exist' % text_id)
        print(f"[INFO] Deleted {text_id}")


