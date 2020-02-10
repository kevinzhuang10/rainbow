from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import VendorSerializer, ItemSerializer
from .models import Vendor, Item

# Create your views here.
class VendorViewSet(viewsets.ModelViewSet):
    serializer_class = VendorSerializer
    queryset = Vendor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    