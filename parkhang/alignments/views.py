from rest_framework import generics

from .models import ImageAlignment, TextAlignment, VideoAlignment
from .serializers import (ImageAlignmentSerializer, TextAlignmentSerializer,
                          VideoAlignmentSerializer)


class DetailTextAlignment(generics.RetrieveAPIView):
    queryset = TextAlignment.objects.all()
    serializer_class = TextAlignmentSerializer

class DetailImageAlignment(generics.RetrieveAPIView):
    queryset = ImageAlignment.objects.all()
    serializer_class = ImageAlignmentSerializer

class DetailVideoAlignment(generics.RetrieveAPIView):
    queryset = VideoAlignment.objects.all()
    serializer_class = VideoAlignmentSerializer

