import os
from storages.backends.s3boto3 import S3Boto3Storage
from django.conf import settings


class StaticStorage(S3Boto3Storage):
    bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME')
    location = settings.STATIC_ROOT


class MediaStorage(S3Boto3Storage):
    bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME')
    location = settings.MEDIA_ROOT
