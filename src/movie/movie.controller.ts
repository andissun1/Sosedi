import {
  Body,
  Controller,
  Delete,
  Get,
  // Headers,
  Param,
  Patch,
  Post,
  // Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/createMovie.dto';
import { updateMovieDto } from './dto/updateMovie.dto';
import { MovieEntity } from './entities/movie.entity';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: updateMovieDto) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }

  @Post()
  create(@Body() dto: MovieEntity) {
    return this.movieService.create(dto);
  }

  // @Get()
  // findAll(@Query() query: any) {
  //   console.log(query);

  //   if (query?.genre) return `Фильмы в жанре ${query.genre}`;
  //   return this.movieService.test();
  // }

  // @Post()
  // create(@Body('title') title: string) {
  //   return title;
  // }

  // @Get('test')
  // getheaders(@Headers() head: any): any {
  //   return head;
  // }
}
