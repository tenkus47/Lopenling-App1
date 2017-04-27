from django.conf.urls import url, include

from .views import SourceList, TextList, TextDetail, WitnessList, AnnotationList, AnnotationDetail, AppliedUserAnnotations

urlpatterns = [
    url(r'sources/$', SourceList.as_view()),
    url(r'texts/$', TextList.as_view()),
    url(r'texts/(?P<text_id>[0-9]+)/?$', TextDetail.as_view()),
    url(r'texts/(?P<text_id>[0-9]+)/witnesses/$', WitnessList.as_view()),
    url(r'texts/(?P<text_id>[0-9]+)/witnesses/(?P<witness_id>[0-9]+)/annotations/$', AnnotationList.as_view()),
    url(r'texts/(?P<text_id>[0-9]+)/witnesses/(?P<witness_id>[0-9]+)/annotations/(?P<annotation_id>[0-9]+)$', AnnotationDetail.as_view()),
    url(r'texts/[0-9]+/witnesses/(?P<witness_id>[0-9]+)/applied_annotations/$', AppliedUserAnnotations.as_view()),
]

