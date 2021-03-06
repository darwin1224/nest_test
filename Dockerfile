FROM node:12.9.0-alpine

WORKDIR /var/www/html

RUN apk add --no-cache bash \
  && npm install -g @nestjs/cli \
  && yarn cache clean -f

COPY . .

EXPOSE ${NODE_PORT}

CMD [ "./wait-for-it.sh", "database:3306", "--", "yarn", "start:debug" ]