#stage 1
FROM  node:18.14.0-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ng-reactive-table /usr/share/nginx/html
