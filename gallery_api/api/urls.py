from django.conf.urls import url
from django.urls import path
from .views import ReadObjectView, ObjectView

urlpatterns = [
    path('', ReadObjectView.as_view()),
    path('object/', ObjectView.as_view(), name='object'),
    url(r'^(?P<path>[a-zA-Z.\/]*)/$', ReadObjectView.as_view(), name='view'),

]
