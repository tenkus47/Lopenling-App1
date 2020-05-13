"""URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.conf import settings
from django.contrib import admin

from project.views import HomeView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^discourse/', include('discourse.urls')),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^api/', include('api.urls')),
    url(r'^[^.]*$', HomeView.as_view())
]

# If we are devloping, load frontend static files via runserver
# In production, these should be served via nginx etc.

in_dev_mode = getattr(settings, 'DEV_MODE', False)
if in_dev_mode:
    import os
    from django.views.static import serve

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    FRONTEND_STATIC = os.path.join(BASE_DIR, "frontend/static/bundles")
    urlpatterns += [
        url(
            r'^$', serve, kwargs={
                'path': 'index.html', 'document_root': FRONTEND_STATIC
            }
        ),
        url(
            r'^bundles/(?P<path>.*)', serve, kwargs={
                'document_root': FRONTEND_STATIC
            }
        )
    ]
