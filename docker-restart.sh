#!/bin/bash

docker-compose down -v

docker-compose up -d --build

docker system prune --volumes -f

docker-compose ps