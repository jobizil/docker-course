##### Build a docker image with tag

```bash
docker build -t [username]/[imagename] .
docker build -t jobizil/visits .
```

##### Build a docker image without tag

```bash
docker build .
```

##### Build a docker image with custome name (eg Dockerfile.dev)

```bash
docker build -f Dockerfile.dev .
```

##### Run a docker container

```bash
 docker run jobizil/visits
```

##### Start a docker-compose container

```bash
 docker-compose up
```

##### Rebuild an image

```bash
 docker-compose up --build
```

##### Launch docker-compose in background

```bash
docker-compose up -d
```

##### Stop Containers

```bash
docker-compose down
```
