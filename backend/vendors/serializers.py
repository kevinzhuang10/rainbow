from rest_framework import serializers
from .models import Vendor, Item

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description', 'image', 'price', 'vendor']

class VendorSerializer(serializers.HyperlinkedModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Vendor
        fields = ['id', 'name', 'description', 'link', 'image', 'items']
        