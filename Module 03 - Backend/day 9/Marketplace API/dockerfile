FROM node:20.9.0
RUN npm install -g typescript

WORKDIR /app

COPY package.json /app

COPY prisma ./prisma

RUN npm install

RUN npx prisma generate

COPY . . 


EXPOSE 8001 

CMD ["npm", "run", "start"]



