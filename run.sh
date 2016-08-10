#!/bin/bash

# Build our containers
docker-compose -f docker-compose.yml build

# Bring up the services that the tests depend on
docker-compose up --timeout 1 --no-build -d

# Run the tests
docker-compose run webdriver npm start

# Stop the services
docker-compose kill
