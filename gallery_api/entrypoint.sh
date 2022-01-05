python manage.py makemigrations --no-input
python manage.py migrate --no-input
python manage.py collectstatic --no-input
#gunicorn gallery_api.wsgi:application --bind 0.0.0.0:8000
python manage.py runserver 0.0.0.0:8000