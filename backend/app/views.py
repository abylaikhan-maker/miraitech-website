from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Publication
from .serializers import PublicationSerializer

class PublicationListView(APIView):
    def get(self, request):
        publications = Publication.objects.all().order_by('-year')
        serializer = PublicationSerializer(publications, many=True)
        return Response(serializer.data)