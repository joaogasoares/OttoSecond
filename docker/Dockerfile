FROM node:14

# Create app dicretory
WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
