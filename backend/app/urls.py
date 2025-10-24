from django.urls import path
from .views import PublicationListView

urlpatterns = [
    path('api/publications/', PublicationListView.as_view(), name='publication-list'),
]
