from rest_framework import status
from rest_framework.test import APITestCase

from texts.models import Text

from users.models import User
from api.views import TextList, SourceList, WitnessList, AnnotationList, AnnotationDetail, AppliedUserAnnotations
from texts.models import Text, Source, Witness, Annotation, AppliedUserAnnotation

class TextsTestCase(APITestCase):
    username = "TestUser"
    password = "1ABDefgH89"
    text_name = 'Test Text'
    source_name = 'Derge'
    source_name_2 = 'Peking'
    witness_content = 'This is witness test content.'
    annotation_start = 5
    annotation_length = 2
    annotation_content = 'the'

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
            creator_witness=cls.witness_2
        )

        cls.user_annotation, created = Annotation.objects.get_or_create(
            witness=cls.witness,
            start=cls.annotation_start,
            length=cls.annotation_length,
            content=cls.annotation_content,
            creator_user=cls.user,
            creator_witness=None
        )

    def test_get_texts(self):
        """
        Get all texts.
        """

        url = '/api/texts/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]['id'], self.text.pk)
        self.assertEqual(response.data[0]['name'], self.text_name)

    def test_get_text(self):
        url = f'/api/texts/{self.text.pk}'
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['id'], self.text.pk)
        self.assertEqual(response.data['name'], self.text.name)

    def test_get_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/annotations/{self.annotation.pk}'
        self.client.login(username=self.username, password=self.password)
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('id' in response.data)
        self.assertEquals(response.data['id'], self.annotation.pk)

    def test_create_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/annotations/'
        self.client.login(username=self.username, password=self.password)
        response = self.client.post(url, {
            'witness': self.witness.pk,
            'start': self.annotation_start,
            'length': self.annotation_length,
            'content': self.annotation_content,
            'creator_user': self.user.pk,
            'creator_witness': None
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue('id' in response.data)

    def test_update_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/annotations/{self.annotation.pk}'
        new_content = 'update_test'
        self.client.login(username=self.username, password=self.password)
        response = self.client.put(url, {
            'witness': self.witness.pk,
            'start': self.annotation_start,
            'length': self.annotation_length,
            'content': new_content,
            'creator_user': self.user.pk,
            'creator_witness': None
        })
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        annotation = Annotation.objects.get_active(self.annotation.pk)
        self.assertEqual(annotation.content, new_content)

    def test_apply_user_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/applied_annotations/'
        self.client.login(username=self.username, password=self.password)
        response = self.client.post(url, {
            'annotation_id': self.annotation.pk
        })

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_remove_user_annotation(self):

        self.test_apply_user_annotation()

        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/applied_annotations/{self.annotation.pk}'
        self.client.login(username=self.username, password=self.password)
        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
