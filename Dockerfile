FROM node:20-alpine3.19

WORKDIR /usr/src/poros-week1-web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]