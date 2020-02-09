from rest_framework import serializers
from .models import Vendor

class VendorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'name', 'description', 'link', 'image']