from unittest import skip

from django.conf import settings
from django.test import TestCase

from .api import DiscourseAPI

TOPIC_ID = 1228

class DiscourseTestCase(TestCase):

    def test_get_topics(self):
        api = DiscourseAPI(settings.DISCOURSE_SITE, settings.DISCOURSE_API_KEY)

        posts = api.get_topic_posts(TOPIC_ID)

        self.assertTrue(len(posts) > 0)

    @skip("Only test manually so as to not clog-up the forum with test topics")
    def test_create_topic(self):
        api = DiscourseAPI(settings.DISCOURSE_SITE, settings.DISCOURSE_API_KEY)

        topic_data = api.add_topic('sherab', 4, 'Test', 'Just testing the API')

        self.assertTrue('id' in topic_data)
