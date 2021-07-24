from django.conf import settings
import os
import boto3


def get_contents(path):
    """
    Retrieving the objects from the bucket.
    :param path: object path.
    :return: result dict.
    """
    session = boto3.session.Session()
    client = session.client('s3', region_name=os.getenv('AWS_S3_REGION'),
                            endpoint_url=os.getenv('AWS_S3_ENDPOINT_URL_WITHOUT_BUCKET_NAME'),
                            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
                            )
    result = client.list_objects(Bucket=f'{os.getenv("AWS_S3_BUCKET_NAME")}',
                                 Prefix=f'{path}', Delimiter='/')
    folders = []
    files = []
    details = {}
    contents = {'folders': folders, 'files': files}

    data = {'details': details, 'contents': contents}

    if result:
        if result.get('Contents'):
            for content in result.get('Contents'):
                if content.get('Key') != path:
                    name = content.get('Key').replace(os.getenv("AWS_S3_ROOT_DIRECTORY"), '')
                    file = {'name': name}
                    files.append(file)
                else:
                    # Avoiding any folders.
                    if content.get('Key')[-1] != '/':
                        url = client.generate_presigned_url('get_object',
                                                            Params={'Bucket': f'{os.getenv("AWS_S3_BUCKET_NAME")}',
                                                                    'Key': f'{path}'}, ExpiresIn=100)
                        details = {'name': path, 'size': content.get('Size'), 'url': url}
                        data['details'] = details

            # Checking for other folders
            if result.get('CommonPrefixes'):
                for prefix in result.get('CommonPrefixes'):
                    folder_name = prefix['Prefix'].replace(os.getenv("AWS_S3_ROOT_DIRECTORY"), '')
                    folder = {'name': folder_name}
                    folders.append(folder)

    return data
