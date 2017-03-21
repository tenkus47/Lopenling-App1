from django.db.models import Q
from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ParseError, ValidationError, NotFound

from .serializers import TextSerializer, SourceSerializer, WitnessSerializer, AnnotationSerializer, AppliedUserAnnotationSerializer
from texts.models import Text, Source, Witness, Annotation, AppliedUserAnnotation


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

    def get(self, request, text_id, witness_id):
        """
        Get list of annotations for the given text.

        If the user is logged in, also return any of that
        user's annotations for the text.
        """

        if request.user.is_authenticated:
            annotation_list = Annotation.objects.filter(
                Q(witness=witness_id),
                Q(creator_user=request.user) | Q(creator_witness__isnull=False)
            )
        else:
            annotation_list = Annotation.objects.filter(
                witness=witness_id,
                creator_user=None
            )

        serializer = AnnotationSerializer(annotation_list, many=True)
        return Response(serializer.data)


class AppliedUserAnnotations(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, witness_id):
        """
        Get list of annotations a user has applied to the given witness

        :param request: Django Request
        :param witness_id: id of the witness the annotation applies to
        :return: JSON encoded list of active annotation id's for the given witness.
        """

        annotations = AppliedUserAnnotation.objects.filter(
            user=request.user,
            annotation__witness__pk=witness_id
        )

        serializer = AppliedUserAnnotationSerializer(annotations, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        """
        Apply annotation to it's assigned witness

        :param request: Django Request
        :param annotation_id: id of the annotation to apply
        :return: Empty string
        """

        annotation_id = request.data['annotation_id']

        try:
            annotation = Annotation.objects.get(id=annotation_id)
        except Annotation.DoesNotExist:
            raise NotFound('An annotation with that ID does not exist.')

        try:
            applied_user_annotation = AppliedUserAnnotation.objects.get(user=request.user, annotation=annotation)
            return Response('Annotation already applied')
        except AppliedUserAnnotation.DoesNotExist:
            applied_user_annotation = AppliedUserAnnotation()

        applied_user_annotation.user = request.user
        applied_user_annotation.annotation = annotation
        applied_user_annotation.save()

        return Response('', status=status.HTTP_204_NO_CONTENT)

    def delete(self, request, *args, **kwargs):
        """
        Remove given annotation

        :param request: django Request
        :param annotation_id: id of the annotation to remove
        :return: Empty string
        """

        annotation_id = request.data['annotation_id']

        try:
            annotation = Annotation.objects.get(id=annotation_id)
        except Annotation.DoesNotExist:
            raise NotFound('An annotation with that ID does not exist.')

        try:
            applied_user_annotation = AppliedUserAnnotation.objects.get(user=request.user, annotation=annotation)
        except AppliedUserAnnotation.DoesNotExist:
            return Response('Annotation already removed')

        applied_user_annotation.delete()

        return Response('', status=status.HTTP_204_NO_CONTENT)