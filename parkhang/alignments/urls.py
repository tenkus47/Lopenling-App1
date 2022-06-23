from django.urls import path

from .views import (ImageAlignmentDetail, TextAlignmentDetail,
                    VideoAlignmentDetail, get_source_alignments)

urlpatterns = [
    path("all/<int:source_pk>", get_source_alignments),
    path("text/<int:pk>", TextAlignmentDetail.as_view()),
    path("image/<int:pk>", ImageAlignmentDetail.as_view()),
    path("video/<int:pk>", VideoAlignmentDetail.as_view()),
]
