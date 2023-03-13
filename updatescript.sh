#!/bin/bash
# ** THIS SCRIPT MUST BE RUN WITH sudo **
# It shuts down the containers, removes the client image

echo "** Shutting Down Containers **"
docker compose down

echo "** Removing caminocollab-client Image **"
docker rmi caminocollab-client
dicker rmi caminocollab-server

echo "** Pulling Changes from Git **"
git pull

echo "** Initializing the Docker Containers Again **"
docker compose up -d

echo "(^-^) Everything should be updated and running normally now! Congratulations!"