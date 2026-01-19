import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/createMovie.dto';
import { updateMovieDto } from './dto/updateMovie.dto';

@Injectable()
export class MovieService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.movie.findMany({
      where: { isAvailable: false },
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

  async findById(id: string): Promise<Movie> {
    const movie = await this.prismaService.movie.findUnique({
      where: {
        id,
      },
      include: {
        actors: true,
        poster: true,
        reviews: true,
      },
    });

    if (!movie || !movie.isAvailable)
      throw new NotFoundException('Не найден фильм');

    return movie;
  }

  async update(id: string, dto: updateMovieDto): Promise<Movie> {
    const movie = await this.findById(id);

    const newMovie = await this.prismaService.movie.update({
      where: { id: movie.id },
      data: {
        ...dto,
      },
    });

    return newMovie;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.prismaService.movie.delete({
      where: {
        id: movie.id,
      },
    });

    return `Фильм ${id} удален`;
  }
}
