from rest_framework import generics

from .models import ImageAlignment, TextAlignment, VideoAlignment
from .serializers import (ImageAlignmentSerializer, TextAlignmentSerializer,
                          VideoAlignmentSerializer)


class TextAlignmentDetail(generics.RetrieveAPIView):
    queryset = TextAlignment.objects.all()
    serializer_class = TextAlignmentSerializer

class ImageAlignmentDetail(generics.RetrieveAPIView):
    queryset = ImageAlignment.objects.all()
    serializer_class = ImageAlignmentSerializer

class VideoAlignmentDetail(generics.RetrieveAPIView):
    queryset = VideoAlignment.objects.all()
    serializer_class = VideoAlignmentSerializer

