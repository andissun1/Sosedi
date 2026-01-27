import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardGameService } from './board-game.service';
import { CreateBoardGameDto } from './dto/create-board-game.dto';
import { UpdateBoardGameDto } from './dto/update-board-game.dto';

@Controller('board-game')
export class BoardGameController {
  constructor(private readonly boardGameService: BoardGameService) {}

  @Post()
  create(@Body() createBoardGameDto: CreateBoardGameDto) {
    return this.boardGameService.create(createBoardGameDto);
  }

  @Get()
  findAll() {
    return this.boardGameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardGameService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoardGameDto: UpdateBoardGameDto,
  ) {
    return this.boardGameService.update(+id, updateBoardGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardGameService.remove(+id);
  }
}
