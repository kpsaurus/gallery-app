from rest_framework import serializers


class PathSerializer(serializers.Serializer):
    path = serializers.CharField(required=False, allow_blank=True, )


class UploadSerializer(serializers.Serializer):
    file = serializers.FileField()
    path = serializers.CharField(required=False, allow_blank=True)


class DeleteSerializer(serializers.Serializer):
    file = serializers.CharField()
