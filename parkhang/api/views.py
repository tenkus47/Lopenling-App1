from django.db.models import Q
from django.http import Http404

from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import TextSerializer, SourceSerializer, WitnessSerializer, AnnotationSerializer
from texts.models import Text, Annotation


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

    def get(self, request, text_id):
        """
        Get list of annotations for the given text.

        If the user is logged in, also return any of that
        user's annotations for the text.
        """

        if request.user.is_authenticated:
            annotation_list = Annotation.objects.filter(
                Q(witness__text__pk=text_id),
                Q(creator_user=request.user) | Q(creator_witness__isnull=False)
            )
        else:
            annotation_list = Annotation.objects.filter(
                witness__text__pk=text_id,
                creator_user=None
            )

        serializer = AnnotationSerializer(annotation_list, many=True)
        return Response(serializer.data)
