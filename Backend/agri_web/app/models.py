from django.db import models

class Farmer(models.Model):
    profile_photo = models.ImageField(upload_to='photos/')
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.TextField()
    phone = models.CharField(max_length=15)
    major_crop = models.CharField(max_length=100)
    area_of_farm = models.FloatField()
    selling_period = models.DateField()
    quantity_of_crop = models.FloatField()
    price_expectations = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    

