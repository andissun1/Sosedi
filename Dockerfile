# Клиентская сборка
FROM node:20 as builder
WORKDIR /app/client
COPY ./client/ ./
RUN npm ci && npm run build

# Серверная сборка
FROM node:20
WORKDIR /app/server

# Копируем зависимости и устанавливаем их
COPY ./server/package*.json ./
RUN npm ci

# Копируем собранный клиент и серверный код
COPY --from=builder /app/client/dist ./client/dist
COPY ./server/ ./ 

# Сборка сервера (если нужна)
RUN npm run build

EXPOSE 3005

# Запуск сервера при старте контейнера
CMD ["npm", "run", "start:prod"]
