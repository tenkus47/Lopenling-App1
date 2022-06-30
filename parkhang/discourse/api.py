import json

import requests
from django.conf import settings


class DiscourseAPI:

    def __init__(self, site_url, api_key):
        self.SITE_URL = site_url
        self.API_KEY = api_key

    def auth_headers(self, username):
        auth_headers = {
            'Api-Key': self.API_KEY,
            'Api-Username' : username
        }

        return auth_headers

    def add_topic(self, username, category_id, topic_name, post_text):
        auth_headers = self.auth_headers(username)
        new_topic_data = {
            'title': topic_name,
            'category': category_id,
            'raw': post_text
        }

        r = requests.post(
            f'{self.SITE_URL}/posts.json',
            json=new_topic_data,
            headers=auth_headers,
            timeout=(10, 60)
        )

        # TODO: handle potential error properly
        try:
            topic_data = r.json()
        except Exception as e:
            print(r.text)
            print(e)


        return {
            'id': topic_data['topic_id']
        }

    def get_topic_posts(self, topic_id, raw_text=False):
        auth_headers = self.auth_headers(settings.DISCOURSE_SYSTEM_USER)
        endpoint = f'{self.SITE_URL}/t/{topic_id}.json'
        if raw_text:
            endpoint += '?include_raw=true'

        r = requests.get(
            endpoint,
            headers=auth_headers,
            timeout=(10, 60)
        )

        response_data = r.json()
        posts_data = []
        if 'post_stream' in response_data:
            if 'posts' in response_data['post_stream']:
                posts_data = response_data['post_stream']['posts']

        posts = []
        for post_data in posts_data:
            post = {
                'id': post_data['id'],
                'name': post_data['name'],
                'username': post_data['username'],
                'content_html': post_data['cooked'],
                'created': post_data['created_at'],
                'is_question': (post_data['post_number'] == 1),
                'is_accepted_answer': post_data.get('accepted_answer')
            }
            if 'raw' in post_data:
                post['content_raw'] = post_data['raw']
            posts.append(post)

        return posts
