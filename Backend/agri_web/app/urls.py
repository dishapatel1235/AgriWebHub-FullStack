from django.urls import path
from .views import FarmerCreateView, FarmerSearchView, api_root

urlpatterns = [
    path('', api_root, name='api-root'),
    path('farmer/create/', FarmerCreateView.as_view(), name='farmer-create'),
    path('farmer/search/', FarmerSearchView.as_view(), name='farmer-search'),
]
