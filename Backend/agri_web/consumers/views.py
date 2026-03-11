from rest_framework import generics, status
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Consumer
from .serializers import ConsumerSerializer
from django.db.models import Q

# API root view for consumers
def consumer_api_root(request):
    return JsonResponse({'message': 'Welcome to the Consumer API!'})

# View to handle POST request for adding consumer data
class ConsumerCreateView(generics.CreateAPIView):
    queryset = Consumer.objects.all()
    serializer_class = ConsumerSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# View to handle GET request for searching consumer data
class ConsumerSearchView(generics.ListAPIView):
    serializer_class = ConsumerSerializer

    def get_queryset(self):
        queryset = Consumer.objects.all()
        search_term = self.request.query_params.get('search', None)

        if search_term:
            queryset = queryset.filter(
                Q(name__icontains=search_term) |
                Q(age__icontains=search_term) |
                Q(address__icontains=search_term) |
                Q(phone__icontains=search_term) |
                Q(crop_name__icontains=search_term) |
                Q(quantity_needs__icontains=search_term) |
                Q(expected_price__icontains=search_term) |
                Q(buying_till__icontains=search_term)  # Additional field
            )

        return queryset
