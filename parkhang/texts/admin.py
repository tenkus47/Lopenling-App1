from django.contrib import admin

from .models import Author, Source, Text, Topic


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("name", )

@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ("name", )

@admin.register(Source)
class SourceAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "is_base", "is_working")

@admin.register(Text)
class TextAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "code", "author")
