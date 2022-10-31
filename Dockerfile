FROM node:13alpine

WORKDIR /app

COPY . .

RUN npm install


CMD [ "node", "index.js" ] 