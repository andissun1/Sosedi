FROM node:20-alpine AS builder
WORKDIR /app/client
COPY ./client/ ./
RUN npm ci && npm run build


FROM node:20-alpine
RUN apk add --no-cache bash netcat-openbsd
WORKDIR /app/server


COPY ./server/package*.json ./
RUN npm ci

COPY --from=builder /app/client/dist ./client/dist
COPY ./server/ ./ 

RUN npx prisma generate && npm run build

EXPOSE 3005

COPY wait-for-db.sh /app/wait-for-db.sh
RUN chmod +x /app/wait-for-db.sh

CMD ["/bin/bash", "/app/wait-for-db.sh"]
# CMD ["npm", "run", "start:prod"]
