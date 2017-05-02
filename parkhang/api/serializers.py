from rest_framework import routers, serializers, viewsets

from texts.models import Text, Source, Witness, Annotation, AppliedUserAnnotation
from users.models import User


class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ('id', 'name')


class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ('id', 'name', 'is_default_base_text')


class WitnessSerializer(serializers.ModelSerializer):
    text = serializers.PrimaryKeyRelatedField(read_only=True)
    source = serializers.PrimaryKeyRelatedField(read_only=True)
    is_base = serializers.SlugRelatedField(
        source='source',
        slug_field='is_default_base_text',
        read_only=True
    )

    class Meta:
        model = Witness
        fields = ('id', 'text', 'source', 'is_base', 'revision', 'content')


class AnnotationSerializer(serializers.ModelSerializer):
    witness = serializers.PrimaryKeyRelatedField(
        queryset=Witness.objects
    )
    creator_witness = serializers.PrimaryKeyRelatedField(
        allow_null=True,
        queryset=Witness.objects
    )
    creator_user = serializers.PrimaryKeyRelatedField(
        allow_null=True, queryset=User.objects
    )
    original = serializers.PrimaryKeyRelatedField(
        allow_null=True, queryset=Annotation.objects
    )

    class Meta:
        model = Annotation
        fields = ('id', 'type', 'witness', 'start', 'length', 'content',
                  'creator_witness', 'creator_user', 'original', 'is_deleted')


class AppliedUserAnnotationSerializer(serializers.ModelSerializer):
    annotation = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = AppliedUserAnnotation
        fields = ('id', 'annotation')