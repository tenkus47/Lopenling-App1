import re
import csv

from django.core.management.base import BaseCommand

from texts.models import Source, Text, Witness, Topic, Author


class Command(BaseCommand):
    """
    Import text data defined in esukhia csv file:
    https://github.com/Esukhia/nalanda-dergetengyur/blob/master/kunsel-melong.csv
    """
    TEXT_CODE = 1
    TITLE = 2
    TOPIC = 4
    AUTHOR = 7

    def add_arguments(self, parser):
        parser.add_argument('csv_file', nargs='?')

    def handle(self, *args, **options):
        csv_filepath = options['csv_file']
        topics = {}
        texts = {}
        authors = {}

        stored_texts = Text.objects.all()
        for text in stored_texts:
            texts[text.code] = text
        
        stored_topics = Topic.objects.all()
        for topic in stored_topics:
            topics[topic.name] = topic

        stored_authors = Author.objects.all()
        for author in stored_authors:
            authors[author.name] = author

        with open(csv_filepath) as csv_file:
            csv_reader = csv.reader(csv_file)
            for row in csv_reader:
                text_code = row[self.TEXT_CODE].strip().lower()
                if not re.match(r'^[a-z][\d]+$', text_code):
                    continue
                title = row[self.TITLE]
                topic_name = row[self.TOPIC]
                author_name = row[self.AUTHOR]

                if text_code not in texts:
                    text = Text()
                    text.name = title
                    text.code = text_code
                    text.save()
                    texts[text_code] = text
                else:
                    text = texts[text_code]
                
                if topic_name not in topics:
                    topic = Topic()
                    topic.name = topic_name
                    topic.save()
                    topics[topic_name] = topic
                else:
                    topic = topics[topic_name]

                if not text.topics.filter(id=topic.id).exists():
                    text.topics.add(topic)
                    text.save()

                if author_name not in authors:
                    author = Author()
                    author.name = author_name
                    author.save()
                    authors[author_name] = author
                else:
                    author = authors[author_name]

                if not text.author or text.author != author:
                    text.author = author
                    text.save()
                else:
                    print(f"author already saved: {author_name}, {author.id}, {text.author.id}")

        