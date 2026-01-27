#!/bin/bash
# wait-for-db.sh
until nc -z -v -w30 postgres 5432; do
  echo "⏳ Ожидание подключения к БД..."
  sleep 1
done

echo "📦 База данных готова — запускаем prisma db push"
npx prisma db push
echo "✅ Схема базы данных синхронизирована"

echo "🚀 Запуск приложения"
npm run start:prod
