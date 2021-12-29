FROM node:lts-alpine AS builder

WORKDIR /build/
COPY package.json package-lock.json /build/
COPY src/ /build/src
RUN npm install && npm run build

FROM node:lts-alpine
WORKDIR /app/
COPY --from=builder /build/package.json /build/package-lock.json /app/
COPY --from=builder /build/src/.vuepress/dist /app/src/.vuepress/dist
RUN npm install --production
EXPOSE 8080
CMD npm run serve
