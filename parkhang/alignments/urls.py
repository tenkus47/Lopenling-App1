from django.urls import path

from .views import (ImageAlignmentDetail, TextAlignmentDetail,
                    VideoAlignmentDetail)

urlpatterns = [
    path("text/<int:pk>", TextAlignmentDetail.as_view()),
    path("image/<int:pk>", ImageAlignmentDetail.as_view()),
    path("video/<int:pk>", VideoAlignmentDetail.as_view()),
]
