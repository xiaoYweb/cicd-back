FORM node
LABEL name="cicd-back"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm i
EXPOSE 5000
CMD npm start
