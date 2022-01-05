# Use an official Python runtime based on Debian 10 "buster" as a parent image.
FROM python:3.9.4-slim-buster

# Add user that will be used in the container.
RUN useradd gallery_api

# Port used by this container to serve HTTP.
EXPOSE 8000

# Set environment variables.
# 1. Force Python stdout and stderr streams to be unbuffered.
# 2. Set PORT variable that is used by Gunicorn. This should match "EXPOSE"
#    command.
ENV PYTHONUNBUFFERED=1 \
    PORT=8000

# Install system packages required by Django.
RUN apt-get update --yes --quiet && apt-get install --yes --quiet --no-install-recommends \
    build-essential && rm -rf /var/lib/apt/lists/*

# Install the application server.
RUN pip install "gunicorn==20.0.4"

# Install the project requirements.
COPY requirements.txt /
RUN pip install -r /requirements.txt

# Use /app folder as a directory where the source code is stored.
WORKDIR /app

# Set this directory to be owned by the "gallery_api" user. This Django project
# uses SQLite, the folder needs to be owned by the user that
# will be writing to the database file.
RUN chown gallery_api:gallery_api /app

# Copy the source code of the project into the container.
COPY --chown=gallery_api:gallery_api . .

# Use user "gallery_api" to run the build commands below and the server itself.
USER gallery_api

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]
