#!/bin/bash

# Run 'docker compose down' to shutdown the containers
echo "!! Shutting Down Containers !!"
docker compose down

echo "!! Removing caminocollab-client Image !!"
docker rmi caminocollab-client

echo "!! Pulling Changes from Git !!"
git pull

