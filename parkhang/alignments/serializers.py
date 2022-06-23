from rest_framework import serializers

from .models import ImageAlignment, TextAlignment, Video, VideoAlignment


class TextAlignmentSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    class Meta:
        model = TextAlignment
        fields = ("id", "source", "target", "type", "alignment")

    def get_type(self, obj):
        return obj.get_type_display()


class ImageAlignmentSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    class Meta:
        model = ImageAlignment
        fields = ("id", "source", "target", "type", "alignment")

    def get_type(self, obj):
        return obj.get_type_display()

class VideoAlignmentSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    class Meta:
        model = VideoAlignment
        fields = ("id", "source", "target", "type", "alignment")

    def get_type(self, obj):
        return obj.get_type_display()

class TargetVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
