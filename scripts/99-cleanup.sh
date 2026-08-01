#!/bin/bash
echo "Cleaning up containers and networks..."
docker-compose -f docker-compose.prod.yml down -v || true
