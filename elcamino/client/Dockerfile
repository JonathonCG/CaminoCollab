FROM node:16

WORKDIR /client

COPY ./ ./

RUN npm install

RUN npm run build --production

RUN npm install -g serve

CMD serve -s build