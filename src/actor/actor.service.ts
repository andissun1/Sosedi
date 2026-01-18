import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { actorEntity } from './entities/actor.entity';
import { CreateActorDto } from './dto/createActor.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(actorEntity)
    private readonly actorRepository: Repository<actorEntity>,
  ) {}

  async create(dto: CreateActorDto): Promise<actorEntity> {
    const { name } = dto;

    const actor = this.actorRepository.create({ name });

    return await this.actorRepository.save(actor);
  }
}
