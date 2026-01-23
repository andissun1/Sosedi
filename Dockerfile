FROM node:20 as builder
WORKDIR /app/client
COPY ./client/ ./
RUN npm ci && npm run build


FROM node:20
WORKDIR /app/server


COPY ./server/package*.json ./
RUN npm ci


COPY --from=builder /app/client/dist ./client/dist
COPY ./server/ ./ 


RUN npx prisma generate && npm run build

EXPOSE 3005


CMD ["npm", "run", "start:prod"]
