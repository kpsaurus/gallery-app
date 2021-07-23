from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.files.storage import default_storage
from django.conf import settings


class HomeView(APIView):
    def get(self, request, format=None):
        """
        Return the folders and files inside root dir.
        """
        directories, files = default_storage.listdir('')
        root_dir = {
            'folders': directories,
            'files': files
        }

        data = {'root_dir': root_dir}
        return Response(data)
