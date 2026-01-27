import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Sosedi API')
    .setDescription('Простое описание API по бэкенду')
    .setVersion('1.1.0')
    .addBearerAuth()
    .build();
}
