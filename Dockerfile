FROM node:16

WORKDIR /usr/src/

COPY . .

EXPOSE 5001

RUN npm i && npm run build && npx prisma generate

CMD [ "npm", "run","start:migrate:prod" ]