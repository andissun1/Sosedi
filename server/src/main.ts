import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { setUpSwagger } from './utils/swagger.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (origin, callback) => {
      const allowed = [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://88.218.67.198',
      ];

      // Разрешаем запросы без origin (например, curl, Postman)
      if (!origin || allowed.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed'));
      }
    },
    credentials: true,
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  setUpSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
