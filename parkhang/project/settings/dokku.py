from .base import *

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PROD_ALLOWED_HOSTS = [os.environ.get('ALLOWED_HOST')]

SECRET_KEY = os.environ.get('SECRET_KEY')

ALLOWED_HOSTS = ALLOWED_HOSTS + PROD_ALLOWED_HOSTS

# EMAIL Settings
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('EMAIL_HOST')
EMAIL_PORT = 587
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = True

STATICFILES_DIRS = STATICFILES_DIRS + [
    '%s/../frontend/static/' % (BASE_DIR),
]

STATIC_ROOT = '/app/storage/static_collected/'
MEDIA_ROOT = '/app/storage/media'

DATABASES = {
    'default': {
        'CONN_MAX_AGE': 0,
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': os.environ.get('DB_HOST'),
        'NAME': os.environ.get('DB_NAME'),
        'PASSWORD': os.environ.get('DB_PASS'),
        'PORT': os.environ.get('DB_PORT'),
        'USER': os.environ.get('DB_USER')
    }
}
