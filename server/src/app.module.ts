import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SeedModule } from './seed/seed.module';
import { SeedService } from './seed/seed.service';
import { UserModule } from './user/user.module';
import { BoardGameModule } from './board-game/board-game.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'server', 'client', 'dist'),
      exclude: ['/api'],
      serveStaticOptions: {
        extensions: ['html', 'js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'svg'],
        index: 'index.html',
        redirect: false,
      },
    }),
    PrismaModule,
    AuthModule,
    RoleModule,
    SeedModule,
    UserModule,
    BoardGameModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, SeedService],
})
export class AppModule {}
