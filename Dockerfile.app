FROM node:12.0


#RUN mkdir -p /opt/ng
WORKDIR /opt/ng
#COPY package*.json /opt/ng
#COPY package*.json ./
EXPOSE 4200

#COPY ./angular /home/node/app
#RUN npm install
#RUN npm install -g @angular/cli nodemon express
#RUN npm install --save-dev @angular-devkit/build-angular

CMD echo "FRONTEND up" && sleep 5 && echo "NPM INSTALL" && npm i --silent && echo "NPM START" && npm start
#CMD [ "tail", "-f", "/dev/null" ]