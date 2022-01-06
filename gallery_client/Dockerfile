# pull official base image
FROM node:17-alpine3.14

# Add user that will be used in the container.
RUN useradd gallery_client

# set working directory
WORKDIR /app

RUN chown gallery_client:gallery_client /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY --chown=gallery_client:gallery_client . .

# Exposing the port
EXPOSE 3000

# Set the default user to gallery_client
USER gallery_client

# start app
CMD ["npm", "start"]