from django.conf.urls import url
from django.urls import path
from .views import ReadObjectView, ObjectView

urlpatterns = [
    path('', ReadObjectView.as_view()),
    path('upload/', ObjectView.as_view(), name='upload'),
    url(r'^(?P<path>[a-zA-Z.\/]*)/$', ReadObjectView.as_view(), name='view'),

]
