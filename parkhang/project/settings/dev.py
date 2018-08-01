from .base import *

DEBUG=True

DEV_MODE=True

DEV_ALLOWED_HOSTS = ["127.0.0.1"]

ALLOWED_HOSTS = ALLOWED_HOSTS + DEV_ALLOWED_HOSTS

LANGUAGE_CODE = 'en'

# WEBPACK
WEBPACK_LOADER = {
    'MAIN': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, '../frontend/webpack-stats-dev.json'),
    }
}