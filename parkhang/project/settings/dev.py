from .base import *

DEBUG=True

DEV_MODE=True

DEV_ALLOWED_HOSTS = ["127.0.0.1"]

ALLOWED_HOSTS = ALLOWED_HOSTS + DEV_ALLOWED_HOSTS

LANGUAGE_CODE = 'en'

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

WEBPACK_LOADER = {
    'MAIN': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, '../frontend/webpack-stats-dev.json'),
    }
}

# Uncomment WEBPACK_LOADER and STATICFILES_DIRS below to 
# test the production js/css build.

# WEBPACK_LOADER = {
#     'MAIN': {
#         'BUNDLE_DIR_NAME': 'bundles/',
#         'STATS_FILE': os.path.join(BASE_DIR, '../frontend/webpack-stats.json'),
#     }
# }

# STATICFILES_DIRS = STATICFILES_DIRS + [
#     '%s/../frontend/static/' % (BASE_DIR),
# ]