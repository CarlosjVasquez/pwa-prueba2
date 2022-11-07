### STAGE 1: Run ###
# FROM nginx:1.17.1-alpine
# COPY ./deployment/nginx/conf/nginx.conf /etc/nginx/nginx.conf
# RUN mkdir -p /etc/nginx/certs
# COPY ./deployment/nginx/certs /etc/nginx/certs
# COPY ./dist/apps/difierelo/exported /usr/share/nginx/html
# EXPOSE 80 443
# CMD ["nginx", "-g", "daemon off;"]

### STAGE 2: Run build ###
FROM node:16.17.1-alpine

ENV ENVIRONMENT=""
ENV PORT=""
RUN mkdir /app && chmod -R 777 /app
WORKDIR /app

COPY dist/apps/difierelo .

EXPOSE 3000

RUN npm install

#ENTRYPOINT npm run run:${ENVIRONMENT}
CMD npm run start