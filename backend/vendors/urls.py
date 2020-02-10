from rest_framework import routers
from .views import VendorViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register(r'vendors', VendorViewSet)
router.register(r'items', ItemViewSet)

urlpatterns = router.urls
