import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeedService {
  constructor(private prismaService: PrismaService) {}

  async seed() {
    if ((await this.prismaService.user.count()) > 0) {
      return console.log('✅ Начальные данные уже загружены');
    }

    await this.prismaService.role.createMany({
      data: [
        { name: 'Админ' },
        { name: 'Игротехник' },
        { name: 'Пользователь' },
      ],
    });

    // Добавление тестового пользователя
    await this.prismaService.user.upsert({
      where: { email: 'admin@mail.ru' },
      update: {},
      create: {
        email: 'admin@mail.ru',
        phone: '79999999999',
        name: 'Админ Админов',
        password: await hash('123123'),
      },
    });

    console.log('✅ Начальные данные загружены');
  }
}
