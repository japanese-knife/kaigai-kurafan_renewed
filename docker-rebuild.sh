#!/bin/sh
rm -rf node_modules package-lock.json
npm install
npm run build
DOCKER_HOST=
docker login docker.re-idea.jp
docker buildx build . --platform=linux/amd64 --build-arg ENV_FILE=.env.production -t docker.re-idea.jp/overseas-cf-lp-frontend:latest
docker push docker.re-idea.jp/overseas-cf-lp-frontend:latest