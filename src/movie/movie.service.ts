import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/createMovie.dto';
import { updateMovieDto } from './dto/updateMovie.dto';
import { responseMovieDto } from './dto/responseMovie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: {
        isAvailable: false,
      },
      order: {
        createdAt: 'desc',
      },
      take: 3,
      select: {
        id: true,
        title: true,
      },
    });
  }

  async findById(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
    });

    if (!movie) throw new NotFoundException('Не найден фильм');
    return movie;
  }

  async create(dto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(dto);
    console.log(123);

    return await this.movieRepository.save(movie);
  }

  async update(id: string, dto: updateMovieDto): Promise<responseMovieDto> {
    const movie = await this.findById(id);

    Object.assign(movie, dto);
    await this.movieRepository.save(movie);

    return movie;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);
    await this.movieRepository.remove(movie);
    return `Фильм ${id} удален`;
  }

  test() {
    return 'hello';
  }
}
