from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from texts.models import Witness

from .models import ImageAlignment, TextAlignment, VideoAlignment
from .serializers import (ImageAlignmentSerializer, TextAlignmentSerializer,
                          VideoAlignmentSerializer)


@api_view(["GET"])
def get_text_alignments(request, text_id):

    def _serialize_alignments(alignments):
        return [
            {"source": source, "target": target, "alignment": id}
            for id, source, target in alignments
        ]

    output = {
        "text": text_id,
        "alignments": {
            "text": [],
            "image": [],
            "video": []
        }
    }

    for witness in Witness.objects.filter(text__id=text_id):
        text_alignments = TextAlignment.objects.filter(source__id=witness.id).values_list("id", "source", "target")
        image_alignments = ImageAlignment.objects.filter(source__id=witness.id).values_list("id","source", "target")
        video_alignments = VideoAlignment.objects.filter(source__id=witness.id).values_list("id", "source", "target")

        output["alignments"]["text"].extend(_serialize_alignments(text_alignments))
        output["alignments"]["image"].extend(_serialize_alignments(image_alignments))
        output["alignments"]["video"].extend(_serialize_alignments(video_alignments))

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

