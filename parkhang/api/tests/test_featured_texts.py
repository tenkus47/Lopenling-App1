from urllib import response
from texts.models import FeaturedText, Text

from rest_framework.test import APITestCase


class FeaturedTextsTestCase(APITestCase):
    text_name = "Test Text"
    order = 1
    description = "Discription for the featured text"

    text = None
    featured_text = None

    @classmethod
    def setUpTestData(cls) -> None:
        cls.text, _ = Text.objects.get_or_create(name=cls.text_name)
        cls.featured_text = FeaturedText.objects.get_or_create(
            text=cls.text, order=cls.order, description=cls.description
        )

    def test_get_featured_texts(self):
        url = "/api/texts/featured/"
        respnse = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)
        self.assertEqual(response.data[0].text, self.text.pk)
        self.assertEqual(response.data[0].title, self.text.name)
        self.assertEqual(response.data[0].order, self.order)
        self.assertEqual(response.data[0].description, self.description)
