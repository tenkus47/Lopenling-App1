from django.conf.urls import url
from django.conf import settings
from discourse import views

urlpatterns = [
    url(
        r'login_redirect/',
        views.SSOProviderRedirect.as_view(),
        name='redirect'
    ),
    url(
        r'sso/',
        views.SSOProviderLogin.as_view(),
        name='sso'
    ),
    url(
        r'logout/?',
        views.SSOLogout.as_view(),
        name='logout'
    )
]
