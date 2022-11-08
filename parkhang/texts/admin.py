from django.conf import settings
from django.contrib import admin

from texts.models import Author, FeaturedText, Question, Source, Text, Topic, Witness


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(Source)
class SourceAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "is_base", "is_working")


@admin.register(Text)
class TextAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "code", "author")


@admin.register(Witness)
class WitnessAdmin(admin.ModelAdmin):
    list_display = ("id", "text", "source", "revision")


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("id", "annotation", "topic_id", "title", "created")


@admin.register(FeaturedText)
class FeaturedTextAmin(admin.ModelAdmin):
    list_display = ("id", "text", "order")


if settings.DEBUG:
    from texts.models import Annotation

    @admin.register(Annotation)
    class AnnotationAdmin(admin.ModelAdmin):
        list_display = ("id", "witness", "type", "start", "length","created")
