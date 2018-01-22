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
        fields = ('id', 'name', 'is_base', 'is_working')


class WitnessSerializer(serializers.ModelSerializer):
    text = serializers.PrimaryKeyRelatedField(read_only=True)
    source = serializers.PrimaryKeyRelatedField(read_only=True)
    is_base = serializers.SlugRelatedField(
        source='source',
        slug_field='is_base',
        read_only=True
    )
    is_working = serializers.SlugRelatedField(
        source='source',
        slug_field='is_working',
        read_only=True
    )

    class Meta:
        model = Witness
        fields = ('id', 'text', 'source', 'is_base', 'is_working', 'revision', 'content')


class AnnotationSerializer(serializers.ModelSerializer):
    witness = serializers.PrimaryKeyRelatedField(
        queryset=Witness.objects
    )
    creator_witness = serializers.PrimaryKeyRelatedField(
        queryset=Witness.objects,
        allow_null = True
    )
    creator_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects,
        allow_null=True
    )
    original = serializers.SlugRelatedField(
        slug_field='unique_id',
        queryset=Annotation.objects,
        allow_null=True
    )
    unique_id = serializers.UUIDField()

    class Meta:
        model = Annotation
        fields = ('id', 'unique_id', 'type', 'witness', 'start', 'length', 'content',
                  'creator_witness', 'creator_user', 'original', 'is_deleted')


class AppliedUserAnnotationSerializer(serializers.ModelSerializer):
    annotation = serializers.PrimaryKeyRelatedField(read_only=True)
    witness = serializers.PrimaryKeyRelatedField(read_only=True)
    annotation_unique_id = serializers.UUIDField(source='annotation.unique_id')

    class Meta:
        model = AppliedUserAnnotation
        fields = ('id', 'annotation', 'witness', 'annotation_unique_id')
