from rest_framework import serializers


class PathSerializer(serializers.Serializer):
    path = serializers.CharField(required=False, allow_blank=True,)
