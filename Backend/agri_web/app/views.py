from rest_framework import generics, status
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Farmer
from .serializers import FarmerSerializer
from django.db.models import Q

# API root view
def api_root(request):
    return JsonResponse({'message': 'Welcome to the API!'})

# View to handle POST request for adding farmer data
class FarmerCreateView(generics.CreateAPIView):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# View to handle GET request for searching farmer data
class FarmerSearchView(generics.ListAPIView):
    serializer_class = FarmerSerializer

    def get_queryset(self):
        queryset = Farmer.objects.all()
        search_term = self.request.query_params.get('search', None)

        if search_term:
            queryset = queryset.filter(
                Q(name__icontains=search_term) |
                Q(age__icontains=search_term) |
                Q(major_crop__icontains=search_term) |
                Q(address__icontains=search_term) |
                Q(phone__icontains=search_term) |
                Q(area_of_farm__icontains=search_term) |  # Additional field
                Q(selling_period__icontains=search_term) |  # Additional field
                Q(quantity_of_crop__icontains=search_term) |  # Additional field
                Q(price_expectations__icontains=search_term)  # Additional field
            )

        return queryset