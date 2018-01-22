from django.db.models import Q
from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ParseError, ValidationError, NotFound, PermissionDenied

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
            annotation_list = Annotation.objects.active().filter(
                Q(witness=witness_id),
                Q(creator_user=request.user) | Q(creator_witness__isnull=False)
            )
        else:
            annotation_list = Annotation.objects.active().filter(
                witness=witness_id,
                creator_user=None
            )

        serializer = AnnotationSerializer(annotation_list, many=True)
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


def get_annotation(request, unique_id):
    try:
        annotation = Annotation.objects.get_active(unique_id)
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

    def delete(self, request, annotation_unique_id):
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
            witness=witness_id
        )

        serializer = AppliedUserAnnotationSerializer(annotations, many=True)
        return Response(serializer.data)

    def post(self, request, witness_id, *args, **kwargs):
        """
        Apply annotation to it's assigned witness

        :param request: Django Request
        :param annotation_unique_id: unique_id of the annotation to apply
        :return: Empty string
        """

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
            applied_user_annotation = AppliedUserAnnotation.objects.get(
                user=request.user,
                annotation=annotation,
                witness=witness
            )
            return Response('Annotation already applied')
        except AppliedUserAnnotation.DoesNotExist:
            applied_user_annotation = AppliedUserAnnotation()

        applied_user_annotation.user = request.user
        applied_user_annotation.annotation = annotation
        applied_user_annotation.witness = witness
        applied_user_annotation.save()

        return Response('', status=status.HTTP_204_NO_CONTENT)


class AppliedUserAnnotationDetail(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, witness_id, annotation_unique_id, *args, **kwargs):

        annotation = get_annotation(request, annotation_unique_id)

        try:
            witness = Witness.objects.get(pk=witness_id)
        except Witness.DoesNotExist:
            raise NotFound('An witness with that ID does not exist.')

        try:
            applied_user_annotation = AppliedUserAnnotation.objects.get(
                user=request.user,
                witness=witness,
                annotation=annotation
            )
        except AppliedUserAnnotation.DoesNotExist:
            raise NotFound('That annotation id is not applied to the given witness')

        applied_user_annotation.delete()

        return Response('', status=status.HTTP_204_NO_CONTENT)


