FROM node:alpine

RUN mkdir -p /var/www/app
RUN mkdir -p /var/www/app/build
WORKDIR /var/www/app
ADD ./api/. /var/www/app
ADD ./build/. /var/www/app/build/.
ADD ./db.json /var/www/app/.

RUN npm i

CMD ["node", "index.js"]
