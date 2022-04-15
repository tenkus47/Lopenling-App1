from django.core.management.base import BaseCommand

from texts.models import Text, Source, Witness, Annotation


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        for model in [Annotation, Text, Source, Witness]:
            print(f"[INFO] Deleting {model.__name__}...")
            model.objects.all().delete()
