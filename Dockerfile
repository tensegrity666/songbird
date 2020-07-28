FROM node:12-alpine
WORKDIR /songbird
COPY package*.json ./
RUN npm ci
COPY public public
COPY src src
RUN npm run build

RUN npm i -g serve
CMD serve -s build
