from rest_framework import routers, serializers, viewsets

from texts.models import Text, Source, Witness, Annotation, UserAnnotationOperation, DefaultWitnessAnnotations, Question
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
        fields = ('id', 'text', 'source', 'is_base', 'is_working', 'revision', 'content', 'properties')


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

    def __init__(self, *args, **kwargs):
        with_modified = kwargs.pop('with_modified', False)

        super(AnnotationSerializer, self).__init__(*args, **kwargs)

        if not with_modified:
            self.fields.pop('modified')

    class Meta:
        model = Annotation
        fields = ('id', 'unique_id', 'type', 'witness', 'start', 'length', 'content',
                  'creator_witness', 'creator_user', 'original', 'is_deleted',
                  'modified')


class UserAnnotationOperationsSerializer(serializers.ModelSerializer):
    annotation = serializers.PrimaryKeyRelatedField(read_only=True)
    witness = serializers.PrimaryKeyRelatedField(read_only=True)
    annotation_unique_id = serializers.UUIDField(source='annotation.unique_id')

    class Meta:
        model = UserAnnotationOperation
        fields = ('id', 'annotation', 'witness', 'operation', 'annotation_unique_id')


class QuestionPostSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    username = serializers.CharField()
    content_html = serializers.CharField()
    created = serializers.DateTimeField()
    is_question = serializers.BooleanField()
    is_accepted_answer = serializers.BooleanField()


class AnswerSerializer(serializers.Serializer):
    name = serializers.CharField()
    username = serializers.CharField()
    content = serializers.CharField()
    created = serializers.CharField()


class QuestionSerializer(serializers.ModelSerializer):
    annotation = serializers.PrimaryKeyRelatedField(read_only=True)
    answers = AnswerSerializer(many=True)
    username = serializers.CharField(source='annotation.creator_user.sso_username', default='')
    name = serializers.CharField(source='annotation.creator_user.name', default='')
    
    class Meta:
        model = Question
        fields = ('id', 'annotation', 'annotation_unique_id', 'topic_id', 'title', 'question', 'username', 'name', 'created', 'answers')

