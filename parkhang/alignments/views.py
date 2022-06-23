from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ImageAlignment, TextAlignment, VideoAlignment
from .serializers import (ImageAlignmentSerializer, TextAlignmentSerializer,
                          VideoAlignmentSerializer)


@api_view(["GET"])
def get_source_alignments(request, source_pk):

    def _serialize_alignments(alignments):
        return [
            {"target": target, "alignment": id}
            for id, target in alignments
        ]

    output = {
        "source": source_pk,
        "alignments": {
            "text": [],
            "image": [],
            "video": []
        }
    }

    text_alignments = TextAlignment.objects.filter(source__id=source_pk).values_list("id", "target")
    image_alignments = ImageAlignment.objects.filter(source__id=source_pk).values_list("id", "target")
    video_alignments = VideoAlignment.objects.filter(source__id=source_pk).values_list("id", "target")

    output["alignments"]["text"] = _serialize_alignments(text_alignments)
    output["alignments"]["image"] = _serialize_alignments(image_alignments)
    output["alignments"]["video"] = _serialize_alignments(video_alignments)

    return Response(output)




class TextAlignmentDetail(generics.RetrieveAPIView):
    queryset = TextAlignment.objects.all()
    serializer_class = TextAlignmentSerializer

class ImageAlignmentDetail(generics.RetrieveAPIView):
    queryset = ImageAlignment.objects.all()
    serializer_class = ImageAlignmentSerializer

class VideoAlignmentDetail(generics.RetrieveAPIView):
    queryset = VideoAlignment.objects.all()
    serializer_class = VideoAlignmentSerializer

