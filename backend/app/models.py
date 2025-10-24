from django.db import models

class Publication(models.Model):
    title = models.CharField(max_length=255)
    source = models.CharField(max_length=255)
    year = models.CharField(max_length=4)
    link = models.URLField()
