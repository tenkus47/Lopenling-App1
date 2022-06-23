from alignments.models import TextAlignment
from rest_framework.test import APITestCase
from texts.models import Text


class TextAlignmentTestCase(APITestCase):
    text_name = "Test Text"

    source = None
    target = None
    alignment = None
    segment_pairs = [
        {
        "source_segment": {
            "start": 0,
            "end": 100
        },
        "target_segment": {
            "start": 0,
            "end": 100
        }
        }
    ]

    @classmethod
    def setUpTestData(cls):
        cls.source, created = Text.objects.get_or_create(
            name=cls.text_name
        )
        cls.target, created = Text.objects.get_or_create(
            name=cls.text_name
        )
        cls.alignment, created = TextAlignment.objects.get_or_create(
            source=cls.source,
            target=cls.target,
            alignment=cls.segment_pairs
        )

    def test_get_alignment(self):
        url = f"/api/alignments/text/{self.alignment.pk}"
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["id"], self.alignment.pk)
        self.assertEqual(response.data["source"], self.source.pk)
        self.assertEqual(response.data["target"], self.target.pk)
        self.assertEqual(response.data["type"], TextAlignment.Types.TEXT.label)
        print(response.data)




