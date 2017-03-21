from rest_framework import routers, serializers, viewsets

from texts.models import Text, Source, Witness, Annotation, AppliedUserAnnotation


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
    witness = serializers.PrimaryKeyRelatedField(read_only=True)
    creator_witness = serializers.PrimaryKeyRelatedField(read_only=True)
    creator_user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Annotation
        fields = ('id', 'witness', 'start', 'length', 'content', 'note',
                  'creator_witness', 'creator_user', 'is_variant',
                  'is_deleted')


class AppliedUserAnnotationSerializer(serializers.ModelSerializer):
    annotation = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = AppliedUserAnnotation
        fields = ('id', 'annotation')