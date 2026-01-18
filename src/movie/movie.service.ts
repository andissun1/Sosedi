import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/createMovie.dto';

@Injectable()
export class MovieService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.movie.findMany({
      where: { isAvailable: true },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        actors: { select: { name: true, id: true } },
      },
    });
  }

  async create(dto: CreateMovieDto): Promise<Movie> {
    const { title, releaseYear, actorsIds, imageUrl } = dto;

    const actors = await this.prismaService.actor.findMany({
      where: {
        id: {
          in: actorsIds,
        },
      },
    });
    if (!actors || !actors.length)
      throw new NotFoundException('Один или несколько актёров не найдены');

    const movie = this.prismaService.movie.create({
      data: {
        title,
        releaseYear,
        poster: imageUrl ? { create: { imageUrl } } : undefined,
        actors: { connect: actors.map((actor) => ({ id: actor.id })) },
      },
    });

    return movie;
  }

  // async findById(id: string): Promise<MovieEntity> {
  //   const movie = await this.movieRepository.findOne({
  //     where: {
  //       id,
  //     },
  //     relations: ['actors'],
  //   });
  //   if (!movie) throw new NotFoundException('Не найден фильм');
  //   return movie;
  // }

  // async update(id: string, dto: updateMovieDto): Promise<responseMovieDto> {
  //   const movie = await this.findById(id);
  //   Object.assign(movie, dto);
  //   await this.movieRepository.save(movie);
  //   return movie;
  // }
  // async delete(id: string): Promise<string> {
  //   const movie = await this.findById(id);
  //   await this.movieRepository.remove(movie);
  //   return `Фильм ${id} удален`;
  // }
  // test() {
  //   return 'hello';
  // }
}
