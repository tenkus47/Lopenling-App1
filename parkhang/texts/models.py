import uuid
from enum import Enum

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import ugettext_lazy as _

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
    topics = models.ManyToManyField("Topic")
    author = models.ForeignKey(
        "Author", on_delete=models.SET_NULL, blank=True, null=True
    )

    def __str__(self):
        return self.name


AUTHOR_CHOICES=[('dawa','dawa'),('kalden','kalden')]  

CATEGORY_CHOICES=[('root','root'),('commentary','commentary')]

class FeaturedText(models.Model):
    """Text to be featured in home page"""

    text = models.ForeignKey(Text, on_delete=models.CASCADE)
    # order in which the text should be displayed
    order = models.IntegerField()
    description = models.CharField(max_length=500, blank=True, null=True)
    category=models.CharField(max_length=100,blank=True,null=True,choices=CATEGORY_CHOICES)
    length=models.IntegerField(default=0)
    author=models.CharField(max_length=100,blank=True,null=True,choices=AUTHOR_CHOICES)

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

    def __str__(self):
        return self.name


class Witness(models.Model):
    """
    Versions of a text, as contained in different sources.

    e.g. the Derge edition witness

    The content should not be changed often. When they are, annotations will
    need to be updated/created to point to the correct place in the new version.
    """

    text = models.ForeignKey(Text, on_delete=models.CASCADE)
    source = models.ForeignKey(Source, on_delete=models.CASCADE)
    """Revision of this witness. Increases if it changes."""
    revision = models.PositiveIntegerField(default=1)
    """The text content of the witness"""
    content = models.TextField(null=True, blank=True)
    """Extra properties for a witness"""
    properties = models.JSONField(null=True, blank=True)

    def __str__(self):
        return f"{self.text} ({self.source})"


class AnnotationQuerySet(models.QuerySet):
    def active(self):
        return self.filter(is_deleted=False)

    def get_active(self, unique_id):
        return self.get(unique_id=unique_id, is_deleted=False)


class AnnotationType(Enum):
    variant = "V"
    note = "N"
    page_break = "P"
    line_break = "L"
    question = "Q"


class Annotation(models.Model):
    TYPE_CHOICES = (
        (AnnotationType.variant.value, "Variant"),
        (AnnotationType.note.value, "Note"),
        (AnnotationType.page_break.value, "Page Break"),
        (AnnotationType.line_break.value, "Line Break"),
        (AnnotationType.question.value, "Question"),
    )
    unique_id = models.UUIDField(unique=True, editable=False, default=uuid.uuid4)
    witness = models.ForeignKey(
        Witness, null=True, blank=True, on_delete=models.SET_NULL
    )
    start = models.IntegerField()
    length = models.IntegerField()
    content = models.CharField(max_length=DEFAULT_MAX_LENGTH, null=True, blank=True)
    """Set if added from another witness"""
    creator_witness = models.ForeignKey(
        Witness,
        null=True,
        blank=True,
        related_name="creator_witness",
        on_delete=models.SET_NULL,
    )
    """Set if created by a user"""
    creator_user = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL
    )
    type = models.CharField(
        max_length=1, choices=TYPE_CHOICES, default=AnnotationType.variant.value
    )
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)
    """The annotation that has been changed to create this annotation"""
    original = models.ForeignKey(
        "self", null=True, blank=True, on_delete=models.SET_NULL
    )

    # see https://docs.djangoproject.com/en/1.11/topics/db/managers/#creating-a-manager-with-queryset-methods
    objects = AnnotationQuerySet.as_manager()

    class Meta:
        indexes = [models.Index(fields=["witness_id", "start", "length", "type"])]

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
            raise ValidationError(
                _(
                    "An annotation's creator can either be a user or "
                    "a witness, not both."
                )
            )

    def __str__(self):
        name = self.creator_name()
        return f"{self.witness.text.name} ({self.witness.source.name}): {self.start}-{self.start+self.length} - {name}"


class UserAnnotationOperation(models.Model):
    OPERATION_CHOICES = (
        ("A", "Applied"),
        ("R", "Removed"),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL
    )
    annotation = models.ForeignKey(
        Annotation, null=True, blank=True, on_delete=models.SET_NULL
    )
    witness = models.ForeignKey(
        Witness, null=True, blank=True, on_delete=models.SET_NULL
    )
    operation = models.CharField(max_length=1, choices=OPERATION_CHOICES)
    """Intended to allow a user to say why they applied this annotation"""
    note = models.TextField(null=True, blank=True)


class DefaultWitnessAnnotations(models.Model):
    """
    Annotations set to be applied to a witness by default when viewing a text.

    These will be set by system admins, either manually
    or via automation, not by end users.
    """

    witness = models.ForeignKey(
        Witness, null=True, blank=True, on_delete=models.SET_NULL
    )
    annotation = models.ForeignKey(
        Annotation, null=True, blank=True, on_delete=models.SET_NULL
    )


class Question(models.Model):
    annotation = models.ForeignKey(Annotation, on_delete=models.CASCADE)
    # We want to be able to save a question without a topic_id in
    # case the external server is down.
    topic_id = models.IntegerField(blank=True, null=True)
    title = models.TextField()
    question = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def annotation_unique_id(self):
        return self.annotation.unique_id

    # Non-persisted data. These are intended to be set
    # after retrieving data from an external server.
    answers = []
