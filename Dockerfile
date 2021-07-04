FROM node:14

WORKDIR /www/nlw/src/app/projeto_ana

COPY package.json ./

RUN npm install

EXPOSE 3001

CMD ["yarn", "start"]