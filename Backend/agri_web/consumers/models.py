from django.db import models

class Consumer(models.Model):
    profile_photo = models.ImageField(upload_to='photos/')
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.TextField()
    phone = models.CharField(max_length=15)
    crop_name = models.CharField(max_length=100)
    quantity_needs = models.FloatField()  # In quintiles
    expected_price = models.DecimalField(max_digits=10, decimal_places=2)
    buying_till = models.DateField()

    def __str__(self):
        return self.name
