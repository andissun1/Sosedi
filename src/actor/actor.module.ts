import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { actorEntity } from './entities/actor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([actorEntity])],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
