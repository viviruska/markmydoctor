from django.db import models


class Doctor(models.Model):
    name = models.TextField(default='')
