# API Dockerfile
FROM node:10
USER root
WORKDIR /usr/src/app
COPY package*.json ./

#
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]