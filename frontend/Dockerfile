FROM node:16-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm install 
COPY . .

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 3000
CMD ["npm", "start"]
