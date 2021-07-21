# Specify a base image
FROM node:alpine

# Change working directory
WORKDIR /usr/app

# Copy package.json file to docker directory to avoin reinstallation of dependecies
COPY ./package.json ./

# Install some depenedncies
RUN npm install
# Copy files to docker directory to avoin reinstallation of dependecies
COPY ./ ./
# Default Command
CMD ["npm", "start"]