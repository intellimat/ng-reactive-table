#stage 1
FROM  node:22.12.0-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ng-reactive-table/browser /usr/share/nginx/html
