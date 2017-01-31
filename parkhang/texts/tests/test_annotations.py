from django.test import TestCase
from django.contrib.auth.models import User

from texts.models import Text, Witness, Annotation, Source


class AnnotationTests(TestCase):
    username = "TestUser"
    password = "1ABDefgH89"
    text_name = "Test Text"
    base_source_name = "Derge"
    creator_source_name = "Lhasa"
    witness_content = "This is a test of a witness."
    annotation_start = 5
    annotation_length = 2
    annotation_content = "test"

    # objects
    user = None
    base_source = None
    creator_source = None
    witness_annotation = None
    user_annotation = None

    @classmethod
    def setUpTestData(cls):
        user, created = User.objects.get_or_create(
            username=cls.username,
            password=cls.password
        )

        text, created = Text.objects.get_or_create(name=cls.text_name)

        base_source, created = Source.objects.get_or_create(name=cls.base_source_name)
        base_witness, created = Witness.objects.get_or_create(
            text=text,
            source=base_source,
            content=cls.witness_content
        )

        creator_source, created = Source.objects.get_or_create(
            name=cls.creator_source_name)
        creator_source_witness, created = Witness.objects.get_or_create(
            text=text,
            source=creator_source,
            content=""
        )

        witness_annotation, created = Annotation.objects.get_or_create(
            witness=base_witness,
            start=cls.annotation_start,
            length=cls.annotation_length,
            content=cls.annotation_content,
            creator_witness=creator_source_witness
        )

        cls.user = user
        cls.base_source = base_source
        cls.creator_source = creator_source
        cls.witness_annotation = witness_annotation

    def setUp(self):
        pass

    def test_annotation(self):
        self.assertEqual(self.creator_source_name, self.witness_annotation.creator_name())
        self.assertTrue(isinstance(self.witness_annotation.creator(), Witness))
