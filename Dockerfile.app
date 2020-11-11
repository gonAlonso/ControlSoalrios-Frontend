FROM node:12.0

RUN npm install -g @angular/cli nodemon 

WORKDIR /opt/ng

#COPY package*.json /opt/ng

RUN npm install

#ENV PATH="./node_modules/.bin:$PATH" 
#COPY . ./

EXPOSE 4200

CMD echo "FRONTEND up" && sleep 5 && npm start
#ENTRYPOINT ["tail", "-f", "/dev/null"]
#ENTRYPOINT ["npm", "start"]