FROM node:16 AS latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:latest

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/.next ./

COPY --from=build /usr/src/app/package*.json ./

RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start"]
