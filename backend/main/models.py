from django.db import models
from django.contrib.auth.models import User

class Hike(models.Model):
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=50)
    duration_hours = models.FloatField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.URLField(blank=True)
    description = models.TextField()
    duration_hours = models.PositiveIntegerField(default=4) 
    def __str__(self):
        return self.title

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hike = models.ForeignKey(Hike, on_delete=models.CASCADE)
    date = models.DateField()
    participants = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.hike.title}"
