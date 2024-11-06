FROM node:latest AS build

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/src/app/.next /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

EXPOSE 443



