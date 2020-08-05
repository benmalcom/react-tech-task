FROM node:13.7.0
RUN apt-get install git
#RUN npm install pm2 -g
WORKDIR /app
COPY package.json /app
#COPY package-lock.json /app
#RUN apt-get install git
RUN mkdir -p public
ARG BUILD_TYPE
ARG PORT
RUN if [ "x$BUILD_TYPE" = "test" ] ; then echo Argument not provided ; else echo Argument is $BUILD_TYPE ; fi
RUN npm install
COPY . /app
#RUN npm run build
RUN npm run build:production
RUN chmod +x start.sh
#RUN pm2 start pm2.json
#RUN echo Listening on port: $PORT
CMD ["node", "server.js", ">", "/dev/null"]
#CMD ["pm2", "status"]
#CMD ["pm2", "start", "/app/pm2.json"]
#CMD ["sh", "start.sh"]
