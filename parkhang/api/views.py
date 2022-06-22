import re
import json

from django.db.models import Q
from django.http import Http404, JsonResponse
from django.conf import settings

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ParseError, ValidationError, NotFound, PermissionDenied

from .serializers import TextSerializer, SourceSerializer, WitnessSerializer, AnnotationSerializer, UserAnnotationOperationsSerializer, QuestionPostSerializer, QuestionSerializer
from texts.models import Text, Source, Witness, Annotation, AnnotationType, UserAnnotationOperation, Question
from users.models import User
from discourse.api import DiscourseAPI


class UserDetail(APIView):

    def put(self, request, user_id):
        user = User.objects.get(pk=user_id)
        if user:
            if 'locale' in request.data:
                user.locale = request.data['locale']
                user.save()

            return Response(status=204)
        else:
            raise Http404


class UserSettings(APIView):

    def get(self, request, user_id):
        user = User.objects.get(pk=user_id)
        if user:
            return Response(user.settings)
        else:
            raise Http404

    def put(self, request, user_id):
        user = User.objects.get(pk=user_id)
        if user:
            settings = user.settings
            if not settings:
                settings = {}
            for setting in request.data:
                settings[setting] = request.data[setting]
            user.settings = settings
            user.save()

            return Response(status=204)
        else:
            raise Http404


class TextList(APIView):

    def get(self, request):
        """
        Get list of available texts.
        """

        text_list = Text.objects.all()
        serializer = TextSerializer(text_list, many=True)
        return Response(serializer.data)


def get_text(pk):
    try:
        return Text.objects.get(pk=pk)
    except Text.DoesNotExist:
        raise Http404


class TextDetail(APIView):

    def get(self, request, text_id):
        """
        Get Text details
        """

        text = get_text(text_id)
        serializer = TextSerializer(text)
        return Response(serializer.data)


class TextSearch(APIView):

    def get(self, request, search_term, text_id=None):
        """
        Return texts with at least one witness containing the given search_term
        :param request:
        :param search_term: string
        :param text_id: int
        :return:
        """

        # Use simple LIKE search for now until proper FTS is setup
        witnesses = Witness.objects.filter(content__contains=search_term)
        if text_id:
            text_id = int(text_id)
            witnesses = witnesses.filter(text_id=text_id)
        texts = []
        results = {}
        extract_length = 60
        left = int((extract_length - len(search_term)) / 2)
        max_results = 0
        delimiters = '།་ '
        delimiter_regex = re.compile(rf'[{delimiters}]')
        if 'max_results' in request.GET:
            max_results = int(request.GET['max_results'])
        for witness in witnesses:
            texts.append(witness.text)
            content_length = len(witness.content)
            for m in re.finditer(search_term, witness.content):
                if witness.text.id not in results:
                    results[witness.text.id] = {
                        'results': [],
                        'total': 0,
                        'extra': False
                    }
                if max_results == 0 or (max_results > 0 and results[witness.text.id]['total'] < max_results):
                    start = m.start() - left
                    if start < 0:
                        start = 0
                    end = start + extract_length
                    if end > content_length:
                        end = content_length
                    extract = witness.content[start:end]
                    delimter_matches = list(delimiter_regex.finditer(extract))
                    start = 0
                    if len(delimter_matches) > 0:
                        first_match = delimter_matches[0]
                        start = first_match.start()

                    if len(delimter_matches) > 1:
                        last_match = delimter_matches[-1]
                        end = last_match.end()
                    else:
                        end = len(extract)

                    extract = extract[start:end]

                    results[witness.text.id]['results'].append((m.start(), extract))
                    results[witness.text.id]['total'] += 1

                if results[witness.text.id]['total'] == max_results:
                    results[witness.text.id]['extra'] = True
                    break

        return JsonResponse(results)


class SourceList(APIView):

    def get(self, request):
        """
        Get list of witness sources.
        """

        source_list = Source.objects.all()
        serializer = SourceSerializer(source_list, many=True)
        return Response(serializer.data)


class WitnessList(APIView):

    def get(self, request, text_id):
        """
        Get list of witnessesfor the given text.
        """

        text = get_text(text_id)
        witnesses = text.witness_set
        serializer = WitnessSerializer(witnesses, many=True)
        return Response(serializer.data)


class AnnotationList(APIView):

    def get(self, request, text_id, witness_id, start=None, length=None):
        """
        Get list of annotations for the given text.

        If the user is logged in, also return any of that
        user's annotations for the text.
        """

        if request.user.is_authenticated:
            annotation_list = Annotation.objects.active().filter(
                Q(witness=witness_id),
                Q(creator_user=request.user) | Q(creator_witness__isnull=False)
            )
        else:
            annotation_list = Annotation.objects.active().filter(
                witness=witness_id,
                creator_user=None
            )
        if start and length:
            annotation_list = annotation_list.filter(start=start,length=length)
        if 'type' in request.query_params:
            annotation_list = annotation_list.filter(type=request.query_params['type'])
        with_modified = False
        if 'with_modified' in request.query_params:
            with_modified = True

        serializer = AnnotationSerializer(annotation_list, many=True, with_modified=with_modified)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        """
        Create a new Annotation
        :param request:
        :return: JSON encoded data for the new annotation, including new id
        """

        serializer = AnnotationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def get_annotation(request, unique_id, active_only=True):
    try:
        if active_only:
            annotation = Annotation.objects.get_active(unique_id)
        else:
            annotation = Annotation.objects.get(unique_id=unique_id)
    except Annotation.DoesNotExist:
        raise NotFound('An annotation with that ID does not exist.')

    if annotation.creator_user:
        if not request.user.is_authenticated or request.user != annotation.creator_user:
            raise PermissionDenied(
                'You do not have permission to view this annotation')

    return annotation


class AnnotationDetail(APIView):

    def get(self, request, annotation_unique_id, *args, **kwargs):
        """
        Get the annotation with the specified id

        :param request:
        :param annotation_unique_id: unique_id of the annotation to return
        """

        annotation = get_annotation(request, annotation_unique_id)

        serializer = AnnotationSerializer(annotation)
        return Response(serializer.data)

    def put(self, request, annotation_unique_id, *args, **kwargs):
        """
        Update annotation with given id

        :param request:
        :param annotation_unique_id: unique_id of the annotation to update
        :return: Empty string
        """

        annotation = get_annotation(request, annotation_unique_id)
        serializer = AnnotationSerializer(annotation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('', status=status.HTTP_204_NO_CONTENT)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, annotation_unique_id, *args, **kwargs):
        """
        Set given annotation's is_deleted to True.
        This prevents it being returned elsewhere and is effectively deleted.
        :param request:
        :param annotation_unique_id: unique_id of the annotation to be deleted
        :return: Empty string
        """

        annotation = get_annotation(request, annotation_unique_id)
        annotation.is_deleted = True
        annotation.save()

        return Response('', status=status.HTTP_204_NO_CONTENT)


class UserAnnotationOperations(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, witness_id):
        """
        Get list of annotations a user has applied to the given witness

        :param request: Django Request
        :param witness_id: id of the witness the annotation applies to
        :return: JSON encoded list of active annotation id's for the given witness.
        """

        annotation_operations = UserAnnotationOperation.objects.filter(
            user=request.user,
            witness=witness_id
        )

        serializer = UserAnnotationOperationsSerializer(annotation_operations, many=True)
        return Response(serializer.data)

    def put(self, request, witness_id, *args, **kwargs):
        """
        Update annotation operation on assigned witness

        :param request: Django Request
        :param witness_id: id of witness the operation relates to
        :return: Empty string
        """

        operation = request.data['operation']
        unique_id = request.data['annotation_unique_id']

        try:
            annotation = Annotation.objects.get(unique_id=unique_id)
        except Annotation.DoesNotExist:
            raise NotFound('An annotation with that ID does not exist.')

        try:
            witness = Witness.objects.get(pk=witness_id)
        except Witness.DoesNotExist:
            raise NotFound('An witness with that ID does not exist.')

        try:
            user_annotation_operation = UserAnnotationOperation.objects.get(
                user=request.user,
                annotation=annotation,
                witness=witness
            )
            if user_annotation_operation.operation is operation:
                return Response('Annotation operation already assigned')
        except UserAnnotationOperation.DoesNotExist:
            raise NotFound('That annotation operation does not exist.')

        user_annotation_operation.operation = operation
        user_annotation_operation.save()

        return Response('', status=status.HTTP_204_NO_CONTENT)

    def post(self, request, witness_id, *args, **kwargs):
        """
        Apply annotation to it's assigned witness

        :param request: Django Request
        :param witness_id: id of witness the operation relates to
        :return: Empty string
        """

        operation = request.data['operation']
        unique_id = request.data['annotation_unique_id']

        try:
            annotation = Annotation.objects.get(unique_id=unique_id)
        except Annotation.DoesNotExist:
            raise NotFound('An annotation with that ID does not exist.')

        try:
            witness = Witness.objects.get(pk=witness_id)
        except Witness.DoesNotExist:
            raise NotFound('An witness with that ID does not exist.')

        try:
            user_annotation_operation = UserAnnotationOperation.objects.get(
                user=request.user,
                annotation=annotation,
                witness=witness
            )
            if user_annotation_operation.operation is operation:
                return Response('Annotation operation already assigned')
        except UserAnnotationOperation.DoesNotExist:
            user_annotation_operation = UserAnnotationOperation()

        user_annotation_operation.user = request.user
        user_annotation_operation.annotation = annotation
        user_annotation_operation.witness = witness
        user_annotation_operation.operation = operation
        user_annotation_operation.save()

        return Response('', status=status.HTTP_204_NO_CONTENT)


class UserAnnotationOperationDetail(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, witness_id, annotation_unique_id, *args, **kwargs):

        annotation = get_annotation(request, annotation_unique_id, False)

        try:
            witness = Witness.objects.get(pk=witness_id)
        except Witness.DoesNotExist:
            raise NotFound('An witness with that ID does not exist.')

        try:
            user_annotation_operation = UserAnnotationOperation.objects.get(
                user=request.user,
                witness=witness,
                annotation=annotation
            )
        except UserAnnotationOperation.DoesNotExist:
            raise NotFound('That annotation id is not applied to the given witness')

        user_annotation_operation.delete()

        return Response('', status=status.HTTP_204_NO_CONTENT)


class QuestionList(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, witness_id, start, length):
        question_annotations = Annotation.objects.filter(witness_id=witness_id, start=start, length=length, type=AnnotationType.question.value)

        discourse_api = DiscourseAPI(settings.DISCOURSE_SITE, settings.DISCOURSE_API_KEY)
        questions = Question.objects.filter(annotation_id__in=question_annotations).select_related('annotation', 'annotation__creator_user')
        try:
            for question in questions:
                if question.topic_id:
                    answers = []
                    posts = discourse_api.get_topic_posts(question.topic_id)
                    for post in posts:
                        if post['is_accepted_answer']:
                            answers.append({
                                'name': post['name'],
                                'username': post['username'],
                                'content': post['content_html'],
                                'created': post['created'],
                            })
                            print(answers)
                    question.answers = answers
        except:
            print("Exception getting answers")
            pass

        questions_serializer = QuestionSerializer(questions, many=True)
        return Response(questions_serializer.data)

    def post(self, request, witness_id, start, length):
        """
        Add a new post to discourse Q&A site related
        to the given annotation.
        """

        user = request.user

        serializer = AnnotationSerializer(data=request.data)
        if serializer.is_valid():
            try:
                annotation = Annotation.objects.get(unique_id=serializer.validated_data['unique_id'])
            except:
                annotation = serializer.save()
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        question_title = request.data['question_title']
        question_content = request.data['question_content']

        question = Question()
        question.annotation = annotation
        question.title = question_title
        question.question = question_content

        try:
            api = DiscourseAPI(settings.DISCOURSE_SITE, settings.DISCOURSE_API_KEY)
            topic_data = api.add_topic(user.sso_username, settings.DISCOURSE_QA_CATEGORY_ID, question_title, question_content)
            topic_id = topic_data['id']
        except:
            topic_id = None
            print("Error saving question via remote API")

        question.topic_id = topic_id
        question.save()

        return Response(topic_id, status=status.HTTP_201_CREATED)


class QuestionPostDetail(APIView):

    def get(self, request, annotation_id):
        question = Question.objects.get(annotation_id=annotation_id)
        api = DiscourseAPI(settings.DISCOURSE_SITE, settings.DISCOURSE_API_KEY)
        posts = api.get_topic_posts(question.topic_id)
        posts = [post for post in posts if post['is_question'] or post['is_accepted_answer']]

        serializer = QuestionPostSerializer(posts, many=True)
        return Response(serializer.data)


class QuestionDetail(APIView):

    def get(self, request, annotation_id):
        question = Question.objects.get(annotation_id=annotation_id)