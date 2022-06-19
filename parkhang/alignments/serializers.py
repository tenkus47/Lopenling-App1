from rest_framework import serializers

from .models import ImageAlignment, TextAlignment, Video, VideoAlignment


class TextAlignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextAlignment

class ImageAlignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageAlignment

class VideoAlignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoAlignment

class TargetVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
