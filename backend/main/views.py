from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Hike, Booking
from .serializers import HikeSerializer, BookingSerializer



@api_view(['GET'])
def get_hikes(request):
    hikes = Hike.objects.all()
    serializer = HikeSerializer(hikes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def book_hike(request):
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_hike(request, id):
    try:
        hike = Hike.objects.get(id=id)
        serializer = HikeSerializer(hike)
        return Response(serializer.data)
    except Hike.DoesNotExist:
        return Response({'error': 'Hike not found'}, status=404)

@api_view(['GET'])  
def get_bookings(request):
    bookings = Booking.objects.all()
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
def cancel_booking(request, id):
    try:
        booking = Booking.objects.get(id=id)
        booking.delete()
        return Response({'message': 'Booking cancelled'})
    except Booking.DoesNotExist:
        return Response({'error': 'Booking not found'}, status=404)
