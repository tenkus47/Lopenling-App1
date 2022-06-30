from alignments.models import AlignmentTypes, ImageAlignment, Imagegroup
from rest_framework.test import APITestCase
from texts.models import Text


class ImageAlignmentTestCase(APITestCase):
    text_name = "Test Text"
    bdrc_imagegroup_id = "IGW000001"

    source = None
    target = None
    alignment = None
    segment_pairs = [
        {
        "source_segment": {
            "start": "0",
            "end": "100"
        },
        "target_segment": "iiif.bdrc.io/bdr:I2KG210052::I2KG2100520004.jpg/full/max/0/default.jpg"
        }
    ]

    @classmethod
    def setUpTestData(cls):
        cls.source, created = Text.objects.get_or_create(
            name=cls.text_name
        )
        cls.target, created = Imagegroup.objects.get_or_create(
            bdrc_imagegroup_id=cls.bdrc_imagegroup_id
        )
        cls.alignment, created = ImageAlignment.objects.get_or_create(
            source=cls.source,
            target=cls.target,
            alignment=cls.segment_pairs
        )

    def test_get_alignment(self):
        url = f"/api/alignments/image/{self.alignment.pk}"
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["id"], self.alignment.pk)
        self.assertEqual(response.data["source"], self.source.pk)
        self.assertEqual(response.data["target"], self.target.pk)
        self.assertEqual(response.data["type"], AlignmentTypes.IMAGE.label)




