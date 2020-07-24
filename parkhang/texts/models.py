import uuid
from enum import Enum

from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.postgres.fields import JSONField



# Constants

DEFAULT_MAX_LENGTH = 4000

# Models

class Text(models.Model):
    """
    Contains metadata about a text. The actual contents
    are contained in witnesses.
    """

    name = models.CharField(max_length=DEFAULT_MAX_LENGTH)
    """BDRC code for text"""
    code = models.CharField(max_length=DEFAULT_MAX_LENGTH)
    topics = models.ManyToManyField('Topic')
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.name


class Topic(models.Model):
    name = models.CharField(max_length=DEFAULT_MAX_LENGTH)

    def __str__(self):
        return self.name


class Author(models.Model):
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
    is_base = models.BooleanField(default=False)
    """True if this source represents the working edition"""
    is_working = models.BooleanField(default=False)


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
    """Extra properties for a witness"""
    properties = JSONField(null=True, blank=True)


class AnnotationQuerySet(models.QuerySet):
    def active(self):
        return self.filter(is_deleted=False)

    def get_active(self, unique_id):
        return self.get(unique_id=unique_id, is_deleted=False)


class AnnotationType(Enum):
    variant = 'V'
    note = 'N'
    page_break = 'P'
    line_break = 'L'
    question = 'Q'


class Annotation(models.Model):
    TYPE_CHOICES = (
        (AnnotationType.variant.value, 'Variant'),
        (AnnotationType.note.value, 'Note'),
        (AnnotationType.page_break.value, 'Page Break'),
        (AnnotationType.line_break.value, 'Line Break')
    )
    unique_id = models.UUIDField(unique=True, editable=False, default=uuid.uuid4)
    witness = models.ForeignKey(Witness)
    start = models.IntegerField()
    length = models.IntegerField()
    content = models.CharField(max_length=DEFAULT_MAX_LENGTH, null=True, blank=True)
    """Set if added from another witness"""
    creator_witness = models.ForeignKey(Witness, null=True, blank=True, related_name="creator_witness", on_delete=models.SET_NULL)
    """Set if created by a user"""
    creator_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL)
    type = models.CharField(max_length=1, choices=TYPE_CHOICES, default=AnnotationType.variant.value)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)
    """The annotation that has been changed to create this annotation"""
    original = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL)

    # see https://docs.djangoproject.com/en/1.11/topics/db/managers/#creating-a-manager-with-queryset-methods
    objects = AnnotationQuerySet.as_manager()

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


class UserAnnotationOperation(models.Model):
    OPERATION_CHOICES = (
        ('A', 'Applied'),
        ('R', 'Removed'),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    annotation = models.ForeignKey(Annotation)
    witness = models.ForeignKey(Witness)
    operation = models.CharField(max_length=1, choices=OPERATION_CHOICES)
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


class Question(models.Model):
    annotation = models.ForeignKey(Annotation, on_delete=models.CASCADE)
    topic_id = models.IntegerField()

