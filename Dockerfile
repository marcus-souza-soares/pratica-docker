FROM node:16

WORKDIR /usr/src/

COPY . .

EXPOSE 5009

RUN npm i && npm run build && npx prisma migrate dev 

CMD [ "npm", "start" ]