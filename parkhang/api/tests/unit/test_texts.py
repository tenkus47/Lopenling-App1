from rest_framework.test import APITestCase, APIRequestFactory

from api.views import TextList, WitnessList
from texts.models import Text, Source, Witness

class TextsTestCase(APITestCase):
    text_name = 'Test Text'
    source_name = 'Derge'
    witness_content = 'This is witness test content.'

    text = None
    source = None
    witness = None

    @classmethod
    def setUpTestData(cls):
        cls.text, created = Text.objects.get_or_create(
            name=cls.text_name
        )

        cls.source, created = Source.objects.get_or_create(
            name=cls.source_name,
            is_default_base_text=True
        )

        cls.witness, created = Witness.objects.get_or_create(
            text=cls.text,
            source=cls.source,
            revision=1,
            content=cls.witness_content
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
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['text'], self.text.pk)
        self.assertEqual(response.data[0]['content'], self.witness_content)