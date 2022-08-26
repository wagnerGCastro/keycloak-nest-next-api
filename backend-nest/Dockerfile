FROM node:14.15.4-alpine3.12 as common-build-stage

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

COPY ./ /home/node/app

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 80

# Dvelopment build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "start:dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start:prod"]




