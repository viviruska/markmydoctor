# Generated by Django 2.2.6 on 2020-03-01 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lists', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='name',
            field=models.TextField(default=''),
        ),
    ]
