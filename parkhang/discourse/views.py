import string
import base64
import hmac
import hashlib
import random
from urllib import parse

from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.hashers import make_password
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http.response import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.views.generic.base import View
from django.conf import settings


def get_nonce(request):
    if 'sso_nonce' in request.session:
        nonce = request.session['sso_nonce']
    else:
        nonce = ''.join(random.SystemRandom().choice(string.hexdigits) for _ in range(32))
        request.session['sso_nonce'] = nonce
    return nonce

class SSOProviderRedirect(View):

    def post(self, request, **kwargs):
        nonce = get_nonce(request)
        return_url = settings.DISCOURSE_SSO_REDIRECT
        payload = f'nonce={nonce}&return_sso_url={return_url}'
        payload_base64 = base64.encodebytes(bytes(payload, 'utf-8'))
        payload_hmac = hmac.new(bytes(settings.DISCOURSE_SSO_KEY, encoding='utf-8'), payload_base64, digestmod=hashlib.sha256)
        signature = payload_hmac.hexdigest()
        query_string = parse.urlencode({'sso': payload_base64, 'sig': signature})
        redirect = f'{settings.DISCOURSE_SSO_LOGIN_URL}?{query_string}'

        if 'success_redirect' in request.POST:
            request.session['success_redirect'] = request.POST['success_redirect']

        return HttpResponseRedirect(
            redirect_to=redirect
        )


class SSOProviderLogin(View):

    def get(self, request, **kwargs):
        payload = request.GET.get('sso')
        signature = request.GET.get('sig')

        payload = bytes(parse.unquote(payload), encoding='utf-8')
        decoded = parse.unquote(base64.decodebytes(payload).decode('utf-8'))
        query_vars = parse.parse_qs(decoded)
        key = bytes(settings.DISCOURSE_SSO_KEY, encoding='utf-8')
        h = hmac.new(key, payload, digestmod=hashlib.sha256)
        valid_sig = h.hexdigest()

        nonce = get_nonce(request)
        if 'nonce' not in query_vars or query_vars['nonce'][0] != nonce:
            return HttpResponseBadRequest('Invalid nonce from login server.')

        if not hmac.compare_digest(valid_sig, signature):
            return HttpResponseBadRequest('Invalid payload from login server.')

        try:
            email = query_vars["email"][0]
            username = query_vars["username"][0]
            name = query_vars["name"][0]
            self.create_user_session(request, email, username, name)
        except Exception as e:
            return HttpResponseBadRequest(f'Missing required data from login server: {e}')

        redirect_url = "/"
        if 'success_redirect' in request.session:
            redirect_url = request.session['success_redirect']
            del request.session['success_redirect']

        return HttpResponseRedirect(
            redirect_to=redirect_url
        )

    def create_user_session(self, request, user_email, username, name):
        """
        Create user session for given user. SSO validation was successful.
        :param user_email: User's email
        :param username: User's discourse username
        :param name: User's full name
        :return:
        """
        user_model = get_user_model()
        user = user_model.objects.get_or_create(
            username='$sso$' + username,
            defaults={
                'password': make_password(None),
                'sso_username': username,
                'email': user_email,
                'name': name,
                'is_active': True
            }
        )
        login(request, user[0])


class SSOLogout(View):

    def get(self, request):
        logout(request)

        return HttpResponseRedirect(
            redirect_to="/"
        )