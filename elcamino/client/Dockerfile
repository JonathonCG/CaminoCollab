FROM node:16

WORKDIR /client

COPY ./ ./

RUN npm install \
    npm run build

CMD serve -s build