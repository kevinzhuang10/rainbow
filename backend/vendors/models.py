from django.db import models

# Create your models here.
class Vendor(models.Model):
    """
    Vendor is a kitchen partner that sells
    food on the platform
    """
    name = models.CharField(max_length=120)
    description = models.TextField()
    link = models.CharField(max_length=200)
    image = models.CharField(max_length=400)

    def __str__(self):
        return self.name

class Item(models.Model):
    """
    Item is a menu item that the Vendor provides
    """
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    description = models.TextField()
    image = models.CharField(max_length=400)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name
