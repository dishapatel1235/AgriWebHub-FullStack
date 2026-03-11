from django.urls import path
from .views import ConsumerCreateView, ConsumerSearchView, consumer_api_root

urlpatterns = [
    path('api/consumer/', consumer_api_root, name='consumer_api_root'),
    path('api/consumer/create/', ConsumerCreateView.as_view(), name='consumer_create'),
    path('api/consumer/search/', ConsumerSearchView.as_view(), name='consumer_search'),
]
