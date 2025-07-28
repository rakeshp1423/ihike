from django.urls import path
from . import views

urlpatterns = [
    path('hikes/', views.get_hikes),
    path('book/', views.book_hike),
    path('hikes/<int:id>/', views.get_hike, name='get_hike'),
    path('bookings/', views.get_bookings, name='get_bookings'),
    path('bookings/<int:id>/', views.cancel_booking, name='cancel_booking'),

]
