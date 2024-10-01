FROM node:22.5.1

WORKDIR /BACKEND_API_AQ54

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]