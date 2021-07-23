from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import HomeView

urlpatterns = [
    path('', HomeView.as_view()),
]
