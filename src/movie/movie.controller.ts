import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/createMovie.dto';
import { updateMovieDto } from './dto/updateMovie.dto';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { responseMovieDto } from './dto/responseMovie.dto';

@ApiTags('Movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Получить все фильмы',
    description: 'Описание',
  })
  @ApiResponse({
    status: 200,
    description: 'Описание ответа',
  })
  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @ApiOperation({
    summary: 'Получить фильм по id',
    description: 'Описание',
  })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Описание ответа',
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   description: 'Фильм не найден',
  // })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'id фильма',
  })
  // @ApiHeader({
  //   name: 'Authorization',
  //   description: 'Токен',
  // })
  @ApiQuery({
    name: 'genre',
    type: String,
    description: 'Жанр фильма',
  })
  @ApiNotFoundResponse({
    description: 'Фильм не найден',
    example: {
      status: 404,
      message: 'Фильм не найден',
      timesamp: 123456789,
      path: '/23123/12312',
    },
  })
  @ApiOkResponse({ description: 'Фильм найден', type: responseMovieDto })
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

  // @ApiOperation({
  //   summary: 'Создать фильм',
  // })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       title: {
  //         type: 'string',
  //         example: 'Любовь и голуби',
  //       },
  //     },
  //   },
  // })
  @Post()
  create(@Body() dto: CreateMovieDto) {
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
