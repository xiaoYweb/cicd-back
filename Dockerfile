FROM node
LABEL name="cicd-back"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN node -v
RUN npm -v
RUN npm i
EXPOSE 5000
CMD npm start
