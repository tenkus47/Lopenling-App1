# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-12-14 10:26
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0012_auto_20201019_1015'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
