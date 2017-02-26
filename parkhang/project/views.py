from django.shortcuts import render
from django.http import HttpResponse

from django.views.generic.base import TemplateView
from django.conf import settings




class HomeView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)

        # assume user has logged in
        user = self.request.user

        context['user'] = user

        return context
