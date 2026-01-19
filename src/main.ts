import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MovieModule } from './movie/movie.module';
// import { AuthGuard } from './common/guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new AuthGuard());
  app.setGlobalPrefix('api');
  app.use(LoggerMiddleware);

  const config = new DocumentBuilder()
    .setTitle('Sosedi API')
    .setDescription('Документация по бэкенду для тайм-кафе')
    .setVersion('1.0')
    .setContact('Андрей', 'https://andissun.vercel.app/', 'test@mail.ru')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [MovieModule],
    extraModels: [MovieModule],
  });

  SwaggerModule.setup('/docs', app, document, {
    jsonDocumentUrl: '/docs-json', //Корвелл для генерации типов по документации Swagger (для фронтендера)
    yamlDocumentUrl: '/docs-yaml',
    customSiteTitle: 'Sosedi API',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
