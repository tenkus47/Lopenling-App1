from django.db import models
from django.utils.translation import gettext_lazy as _
from texts.models import Text


class Alignment(models.Model):
    class Types(models.TextChoices):
        TEXT = 'T', _('Text')
        IMAGE = 'I', _('Image')
        VIDEO = 'V', _('Video')

    source = models.ForeignKey(
        Text,
        related_name="%(app_label)s_%(class)s_related",
        on_delete=models.CASCADE
    )
    alignment = models.JSONField()
    type = models.CharField(max_length=1, blank=True, null=True)

    class Meta:
        abstract = True

class TextAlignment(Alignment):
    target = models.ForeignKey(Text, related_name="alignment_text", on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = Alignment.Types.TEXT
        return super().save(*args, **kwargs)

class Imagegroup(models.Model):
    bdrc_imagegroup_id = models.CharField(max_length=120)

class ImageAlignment(Alignment):
    target = models.ForeignKey(Imagegroup, related_name="alignment_image", on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = Alignment.Types.IMAGE
        return super().save(*args, **kwargs)

class Video(models.Model):
    title = models.CharField(max_length=300)
    url = models.CharField(max_length=300)
class VideoAlignment(Alignment):
    target = models.ForeignKey(Video, related_name="alignment_video", on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = Alignment.Types.VIDEO
        return super().save(*args, **kwargs)
