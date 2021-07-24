from django.conf.urls import url
from django.urls import path
from .views import ReadObjectView

urlpatterns = [
    path('', ReadObjectView.as_view()),
    url(r'^(?P<path>[a-zA-Z.\/]*)/$', ReadObjectView.as_view())
]
