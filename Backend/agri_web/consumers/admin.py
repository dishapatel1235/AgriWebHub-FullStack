from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Consumer

@admin.register(Consumer)
class ConsumerAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'address', 'phone', 'crop_name', 'quantity_needs', 'expected_price', 'buying_till')
    search_fields = ('name', 'phone', 'crop_name')
