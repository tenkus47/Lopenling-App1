from rest_framework import status
from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate
from rest_framework.exceptions import NotFound, PermissionDenied

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

        request = factory.get(url)
        force_authenticate(request, user=self.user)
        response = AnnotationList.as_view()(request, self.text.pk,  self.witness.pk)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)

    def test_get_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/annotations/{self.annotation.pk}'
        factory = APIRequestFactory()
        request = factory.get(url)
        force_authenticate(request, user=self.user)

        response = AnnotationDetail.as_view()(request, self.annotation.pk)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('id' in response.data)
        self.assertEquals(response.data['id'], self.annotation.pk)

    def test_create_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/annotations/'
        factory = APIRequestFactory()
        request = factory.post(url, {
            'witness': self.witness.pk,
            'start': self.annotation_start,
            'length': self.annotation_length,
            'content': self.annotation_content,
            'creator_user': self.user.pk,
            'creator_witness': None
        })
        force_authenticate(request, user=self.user)

        response = AnnotationList.as_view()(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue('id' in response.data)

    def test_update_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/annotations/{self.annotation.pk}'
        factory = APIRequestFactory()
        new_content = 'update_test'
        request = factory.put(url, {
            'witness': self.annotation.witness.pk,
            'start': self.annotation.start,
            'length': self.annotation.length,
            'content': new_content,
            'creator_user': None,
            'creator_witness': self.annotation.creator_witness.pk
        })
        force_authenticate(request, user=self.user)

        response = AnnotationDetail.as_view()(request, self.annotation.pk)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_delete_annotation(self):
        url = f'/api/texts/{self.text.pk}/witnesses/{self.witness.pk}/annotations/{self.annotation.pk}'
        factory = APIRequestFactory()
        request = factory.delete(url)
        force_authenticate(request, user=self.user)

        response = AnnotationDetail.as_view()(request, self.annotation.pk)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(Annotation.DoesNotExist):
            Annotation.objects.get(pk=self.annotation.pk)

    def test_apply_user_annotation(self):
        url = f'/api/texts/{self.text.pk}/{self.witness.pk}/applied_annotations/'
        factory = APIRequestFactory()

        # add applied annotation
        request = factory.post(url, {'annotation_id' : self.annotation.pk})
        force_authenticate(request, user=self.user)
        response = AppliedUserAnnotations.as_view()(request)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        applied_annotation = AppliedUserAnnotation.objects.get(annotation=self.annotation)

        request = factory.get(url)
        force_authenticate(request, user=self.user)
        response = AppliedUserAnnotations.as_view()(request, self.annotation.witness_id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['annotation'], self.annotation.pk)

        request = factory.delete(url, {'annotation_id' : self.annotation.pk})
        force_authenticate(request, user=self.user)
        response = AppliedUserAnnotations.as_view()(request)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(AppliedUserAnnotation.objects.count(), 0)

