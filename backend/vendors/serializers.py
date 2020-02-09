from rest_framework import serializers
from .models import Vendor, Item

class VendorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'name', 'description', 'link', 'image']
        
class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description', 'image', 'price', 'vendor']
