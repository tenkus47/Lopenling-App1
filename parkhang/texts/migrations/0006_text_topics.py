# -*- coding: utf-8 -*-
# Generated by Django 1.11.26 on 2020-01-06 10:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0005_auto_20200103_1058'),
    ]

    operations = [
        migrations.AddField(
            model_name='text',
            name='topics',
            field=models.ManyToManyField(to='texts.Topic'),
        ),
    ]