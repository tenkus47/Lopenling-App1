from django.db import models
from texts.models import Text


class Alignment(models.Model):
    source = models.ForeignKey(
        Text,
        related_name="%(app_label)s_%(class)s_related",
        on_delete=models.CASCADE
    )
    alignment = models.JSONField()

    class Meta:
        abstract = True

class TextAlignment(Alignment):
    target = models.ForeignKey(Text, related_name="alignment_text", on_delete=models.CASCADE)

class Imagegroup(models.Model):
    bdrc_imagegroup_id = models.CharField(max_length=120)

class ImageAlignment(Alignment):
    target = models.ForeignKey(Imagegroup, related_name="alignment_image", on_delete=models.CASCADE)

class Video(models.Model):
    title = models.CharField(max_length=300)
    url = models.CharField(max_length=300)
class VideoAlignment(Alignment):
    target = models.ForeignKey(Video, related_name="alignment_video", on_delete=models.CASCADE)
