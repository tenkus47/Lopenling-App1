from django.contrib import admin

from .models import (ImageAlignment, Imagegroup, TextAlignment, Video,
                     VideoAlignment)


@admin.register(TextAlignment)
class TextAglinmentAdmin(admin.ModelAdmin):
    list_display = ("id", "source", "target", "type")

@admin.register(Imagegroup)
class ImagegroupAdmin(admin.ModelAdmin):
    list_display = ("id", "bdrc_imagegroup_id")

@admin.register(ImageAlignment)
class ImageAglinmentAdmin(admin.ModelAdmin):
    list_display = ("id", "source", "target", "type")

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "url")

@admin.register(VideoAlignment)
class VideoAglinmentAdmin(admin.ModelAdmin):
    list_display = ("id", "source", "target", "type")
