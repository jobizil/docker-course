# Use an existing docker image as a base

FROM alpine



# Download and install a dependency
RUN apk add --update redis



# Tell image what command to run as a container
CMD ["redis-server"]