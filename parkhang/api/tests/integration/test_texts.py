from rest_framework.test import APITestCase

from texts.models import Text

class TextsTestCase(APITestCase):
    text_name = 'Test Text'

    text = None

    @classmethod
    def setUpTestData(cls):
        cls.text, created = Text.objects.get_or_create(
            name=cls.text_name
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