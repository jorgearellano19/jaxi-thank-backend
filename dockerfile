FROM node:latest
WORKDIR /usr/src/app/graphqlApp
COPY package.json /usr/src/app/graphqlApp/
RUN npm install
COPY . /usr/src/graphqlApp
EXPOSE 4000
CMD npm start