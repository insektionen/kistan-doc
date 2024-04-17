FROM node:lts-alpine AS builder

WORKDIR /build/
COPY package.json package-lock.json /build/
COPY src/ /build/src
RUN npm install && npm run build

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /build/src/.vuepress/dist /usr/share/nginx/html
