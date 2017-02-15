from django.contrib.auth.models import User

from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate

from api.views import TextList, SourceList, WitnessList, AnnotationList
from texts.models import Text, Source, Witness, Annotation

class TextsTestCase(APITestCase):
    username = "TestUser"
    password = "1ABDefgH89"
    text_name = 'Test Text'
    source_name = 'Derge'
    source_name_2 = 'Peking'
    witness_content = 'This is witness test content.'
    annotation_start = 5
    annotation_length = 2
    annotation_content= 'the'

    user = None
    text = None
    source = None
    source_2 = None
    witness = None
    witness_2 = None
    annotation = None
    user_annotation = None

    @classmethod
    def setUpTestData(cls):
        cls.user, created = User.objects.get_or_create(
            username=cls.username,
            password=cls.password
        )

        cls.text, created = Text.objects.get_or_create(
            name=cls.text_name
        )

        cls.source, created = Source.objects.get_or_create(
            name=cls.source_name,
            is_default_base_text=True
        )

        cls.source_2, created = Source.objects.get_or_create(
            name=cls.source_name_2,
            is_default_base_text=False
        )

        cls.witness, created = Witness.objects.get_or_create(
            text=cls.text,
            source=cls.source,
            revision=1,
            content=cls.witness_content
        )

        cls.witness_2, created = Witness.objects.get_or_create(
            text=cls.text,
            source=cls.source_2,
            revision=1,
            content=""
        )

        cls.annotation, created = Annotation.objects.get_or_create(
            witness=cls.witness,
            start=cls.annotation_start,
            length=cls.annotation_length,
            content=cls.annotation_content,
            creator_witness=cls.witness_2,
            is_variant=True
        )

        cls.user_annotation, created = Annotation.objects.get_or_create(
            witness=cls.witness,
            start=cls.annotation_start,
            length=cls.annotation_length,
            content=cls.annotation_content,
            creator_user=cls.user,
            creator_witness=None,
            is_variant=True
        )

    def test_get_texts(self):
        """
        Get all texts.
        """

        factory = APIRequestFactory()
        request = factory.get('/api/texts/')

        response = TextList.as_view()(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]['name'], self.text_name)
        self.assertEqual(response.data[0]['id'], self.text.pk)

    def test_get_witnesses(self):
        url = f'/api/texts/{self.text.pk}/witnesses/'
        factory = APIRequestFactory()
        request = factory.get(url)

        response = WitnessList.as_view()(request, self.text.pk)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]['text'], self.text.pk)
        self.assertEqual(response.data[0]['content'], self.witness_content)
        self.assertEqual(response.data[0]['is_base'], True)

    def test_get_sources(self):
        factory = APIRequestFactory()
        request = factory.get('/api/sources/')

        response = SourceList.as_view()(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]['name'], self.source_name)

    def test_get_annotations(self):
        url = f'/api/texts/{self.text.pk}/{self.witness.pk}/annotations/'
        factory = APIRequestFactory()
        request = factory.get(url)

        response = AnnotationList.as_view()(request, self.text.pk, self.witness.pk)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['witness'], self.witness.pk)
        self.assertEqual(response.data[0]['start'], self.annotation_start)
        self.assertEqual(response.data[0]['length'], self.annotation_length)
        self.assertEqual(response.data[0]['content'], self.annotation_content)
        self.assertEqual(response.data[0]['creator_witness'], self.witness_2.pk)
        self.assertEqual(response.data[0]['is_variant'], True)

        request = factory.get(url)
        force_authenticate(request, user=self.user)
        response = AnnotationList.as_view()(request, self.text.pk,  self.witness.pk)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)