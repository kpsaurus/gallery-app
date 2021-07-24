from rest_framework.response import Response
from rest_framework.views import APIView
from .utils import get_contents
import os
from .serializer import PathSerializer
from rest_framework.permissions import AllowAny


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
        else:
            data = serializer.errors
        return Response(data)
