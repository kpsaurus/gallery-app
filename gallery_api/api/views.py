from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from .utils import get_contents, s3_client, restructure_errors
import os
from .serializer import PathSerializer, UploadSerializer, DeleteSerializer
from rest_framework.permissions import AllowAny
from .response_data import SUCCESS, FAILED


class ReadObjectView(APIView):
    permission_classes = [AllowAny, ]

    def post(self, request, path=None, format=None):
        """
        Return the folders and files inside root dir.
        """
        serializer = PathSerializer(data=request.data)
        if serializer.is_valid():
            path = serializer.data['path']
            if path:
                data = get_contents(os.getenv("AWS_S3_ROOT_DIRECTORY") + path)
            else:
                data = get_contents(os.getenv('AWS_S3_ROOT_DIRECTORY'))

            response = SUCCESS
            response['response'] = data
        else:
            response = FAILED
            errors = serializer.errors
            response['errors'] = restructure_errors(errors)
        return Response(response)


class ObjectView(APIView):
    permission_classes = [AllowAny, ]
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def put(self, request):
        serializer = UploadSerializer(data=request.data)
        if serializer.is_valid():
            file = request.data['file']
            path = serializer.data.get('path')
            client = s3_client()
            # If the path has been provided, then concatenate it with the root directory and
            # or else, root directory will be the target directory.
            if path:
                target = os.getenv('AWS_S3_ROOT_DIRECTORY') + path
            else:
                target = os.getenv('AWS_S3_ROOT_DIRECTORY')
            # Target file.
            target += str(file)

            client.upload_fileobj(file, f"{os.getenv('AWS_S3_BUCKET_NAME')}", target)

            response = SUCCESS
        else:
            response = FAILED
            errors = serializer.errors
            response['errors'] = restructure_errors(errors)

        return Response(response)

    def delete(self, request):
        serializer = DeleteSerializer(data=request.data)
        if serializer.is_valid():
            client = s3_client()
            target_file = os.getenv('AWS_S3_ROOT_DIRECTORY') + serializer.data['file']
            client.delete_object(Bucket=f"{os.getenv('AWS_S3_BUCKET_NAME')}", Key=f'{target_file}')
            response = SUCCESS
        else:
            response = FAILED
            errors = serializer.errors
            response['errors'] = restructure_errors(errors)
        return Response(response)
