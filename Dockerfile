FROM node:16

WORKDIR /usr/src/

COPY . .

EXPOSE 5000

RUN npm i && npx prisma generate && npx prisma migrate deploy

CMD [ "npm", "start" ]