# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-09-03 13:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0007_auto_20170903_1126'),
    ]

    operations = [
        migrations.RenameField(
            model_name='source',
            old_name='is_base_edition',
            new_name='is_base',
        ),
        migrations.RenameField(
            model_name='source',
            old_name='is_working_edition',
            new_name='is_working',
        ),
    ]
