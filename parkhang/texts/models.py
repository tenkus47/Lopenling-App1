from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.contrib.auth import get_user_model



# Constants

DEFAULT_MAX_LENGTH = 4000

# Models

class Text(models.Model):
    """
    Contains metadata about a text. The actual contents
    are contained in witnesses.
    """

    name = models.CharField(max_length=DEFAULT_MAX_LENGTH)

    def __str__(self):
        return self.name


class Source(models.Model):
    """
    The source of a witness.

    This will predominantly be the main collections
    such as Derge.
    """

    """The name of the source.
    e.g. སྡེ་དགེ. This should be localised"""
    name = models.CharField(max_length=DEFAULT_MAX_LENGTH)
    """True if this source will be the default base text."""
    is_default_base_text = models.BooleanField(default=False)


class Witness(models.Model):
    """
    Versions of a text, as contained in different sources.

    e.g. the Derge edition witness

    The content should not be changed often. When they are, annotations will
    need to be updated/created to point to the correct place in the new version.
    """

    text = models.ForeignKey(Text)
    source = models.ForeignKey(Source)
    """Revision of this witness. Increases if it changes."""
    revision = models.PositiveIntegerField(default=1)
    """The text content of the witness"""
    content = models.TextField(null=True, blank=True)


class Annotation(models.Model):
    witness = models.ForeignKey(Witness)
    start = models.IntegerField()
    length = models.IntegerField()
    content = models.CharField(max_length=DEFAULT_MAX_LENGTH, null=True, blank=True)
    note = models.TextField(null=True, blank=True)
    """Set if added from another witness"""
    creator_witness = models.ForeignKey(Witness, null=True, blank=True, related_name="creator_witness")
    """Set if created by a user"""
    creator_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True)
    """Set to False if annotation is simply a note"""
    is_variant = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)

    def creator(self):
        if self.creator_witness:
            return self.creator_witness
        if self.creator_user:
            return self.creator_user
        
        return None

    def creator_name(self):
        creator = self.creator()
        if creator:
            if isinstance(creator, Witness):
                return creator.source.name
            User = get_user_model()
            if isinstance(creator, User):
                return creator.username

    def clean(self):
        if self.creator_witness and self.creator_user:
            raise ValidationError(_('An annotation\'s creator can either be a user or '
                                    'a witness, not both.'))

    def __str__(self):
        name = self.creator_name()
        return f'{self.witness.text.name} ({self.witness.source.name}): {self.start}-{self.start+self.length} - {name}'


class AppliedUserAnnotation(models.Model):
    """
    Annotations that a User has selected to be active.
    """

    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    annotation = models.ForeignKey(Annotation)
    """Intended to allow a user to say why they applied this annotation"""
    note = models.TextField(null=True, blank=True)


class DefaultWitnessAnnotations(models.Model):
    """
    Annotations set to be applied to a witness by default when viewing a text.

    These will be set by system admins, either manually
    or via automation, not by end users.
    """

    witness = models.ForeignKey(Witness)
    annotation = models.ForeignKey(Annotation)



