from alignments.models import AlignmentTypes, Video, VideoAlignment
from rest_framework.test import APITestCase
from texts.models import Text


class VideoAlignmentTestCase(APITestCase):
    text_name = "Test Text"
    video_title = "Video title"
    video_url = "https://www.youtube.com/watch?v=2MMM_ggekfE"

    source = None
    target = None
    alignment = None
    segment_pairs = [
        {
        "source_segment": {
            "start": "0",
            "end": "100"
        },
        "target_segment": {
            "start": "00:00:10",
            "end": "00:10:00"
        }
        }
    ]

    @classmethod
    def setUpTestData(cls):
        cls.source, created = Text.objects.get_or_create(
            name=cls.text_name
        )
        cls.target, created = Video.objects.get_or_create(
            title=cls.video_title,
            url=cls.video_url
        )
        cls.alignment, created = VideoAlignment.objects.get_or_create(
            source=cls.source,
            target=cls.target,
            alignment=cls.segment_pairs
        )

    def test_get_alignment(self):
        url = f"/api/alignments/video/{self.alignment.pk}"
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["id"], self.alignment.pk)
        self.assertEqual(response.data["source"], self.source.pk)
        self.assertEqual(response.data["target"], self.target.pk)
        self.assertEqual(response.data["type"], AlignmentTypes.VIDEO.label)




