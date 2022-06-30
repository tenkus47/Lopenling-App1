import json
import re
from pathlib import Path

from alignments.models import ImageAlignment, Imagegroup
from django.core.management.base import (BaseCommand, CommandError,
                                         CommandParser)
from texts.models import Witness


class Command(BaseCommand):

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument("path", nargs='?')

    def create_imagegroup(self, segment_pairs):
        image_url = segment_pairs[0]["target_segment"]
        bdrc_imagegroup_id = re.search("bdr:(.+?)::", image_url).group(1)
        imagegroup, _ = Imagegroup.objects.get_or_create(
            bdrc_imagegroup_id=bdrc_imagegroup_id
        )
        return imagegroup

    def handle(self, *args, **options) -> None:
        alignments_path = Path(options["path"])
        if not alignments_path.is_dir():
            raise CommandError(f"Alignments data doesn't exits at: {alignments_path.resolve()}")

        for text_dir in alignments_path.iterdir():
            text_name = text_dir.name
            for witness_image_alignment_path in text_dir.iterdir():
                segment_pairs = json.load(witness_image_alignment_path.open())["alignment"]
                source_name = witness_image_alignment_path.stem
                witness = Witness.objects.get(text__name=text_name, source__name=source_name)
                try:
                    image_alignment = ImageAlignment.objects.get(source=witness)
                    image_alignment.alignment = segment_pairs
                    image_alignment.save()
                except ImageAlignment.DoesNotExist:
                    imagegroup = self.create_imagegroup(segment_pairs)
                    image_alignment = ImageAlignment.objects.create(
                        source=witness,
                        target=imagegroup,
                        alignment=segment_pairs
                    )


