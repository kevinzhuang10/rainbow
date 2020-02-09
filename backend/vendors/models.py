from django.db import models

# Create your models here.
class Vendor(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    link = models.CharField(max_length=200)
    image = models.CharField(max_length=400)

    def __str__(self):
        return self.name