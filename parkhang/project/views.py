from django.shortcuts import render
from django.http import HttpResponse

from django.views.generic.base import TemplateView
from django.conf import settings
from django.middleware import csrf



class HomeView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)

        # assume user has logged in
        user = self.request.user

        context['user'] = user
        context['csrf_token'] = csrf.get_token(self.request)
        context['sso_signup_url'] = settings.DISCOURSE_SSO_SIGNUP_URL
        context['facebook_app_key'] = settings.FACEBOOK_APP_KEY

        return context
