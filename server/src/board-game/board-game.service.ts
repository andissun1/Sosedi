import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardGameDto } from './dto/create-board-game.dto';
import { UpdateBoardGameDto } from './dto/update-board-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardGameService {
  constructor(private prismaService: PrismaService) {}

  async create(createBoardGameDto: CreateBoardGameDto) {
    const boardGame = await this.prismaService.boardGame.create({
      data: {
        name: createBoardGameDto.name,
        images: createBoardGameDto.images,
        minPlayers: createBoardGameDto.minPlayers,
        maxPlayers: createBoardGameDto.maxPlayers,
        minPlaytime: createBoardGameDto.minPlaytime,
        maxPlaytime: createBoardGameDto.maxPlaytime,
        description: createBoardGameDto.description,
        isAvailable: createBoardGameDto.isAvailable ?? true,
        difficulty: createBoardGameDto.difficulty,
      },
    });

    if (
      createBoardGameDto.categories &&
      createBoardGameDto.categories.length > 0
    ) {
      await this.prismaService.boardGameCategory.createMany({
        data: createBoardGameDto.categories.map((category) => ({
          boardGameId: boardGame.id,
          categoryId: category,
        })),
      });
    }

    if (createBoardGameDto.tags && createBoardGameDto.tags.length > 0) {
      await this.prismaService.boardGameTag.createMany({
        data: createBoardGameDto.tags.map((tagId) => ({
          boardGameId: boardGame.id,
          tagId,
        })),
      });
    }

    const game = await this.prismaService.boardGame.findUnique({
      where: {
        id: boardGame.id,
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    if (!game) throw new NotFoundException('Игра не найдена');

    return {
      ...game,
      categories: game.categories.map((item) => item.category),
      tags: game.tags.map((item) => item.tag),
    };
  }

  async findAll() {
    return await this.prismaService.boardGame.findMany();
  }

  async findOne(id: number) {
    const game = await this.prismaService.boardGame.findUnique({
      where: {
        id,
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    if (!game) throw new NotFoundException('Игра не найдена');

    return {
      ...game,
      categories: game.categories.map((item) => item.category),
      tags: game.tags.map((item) => item.tag),
    };
  }

  async update(id: number, updateBoardGameDto: UpdateBoardGameDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { tags, categories, ...changes } = updateBoardGameDto;

    return await this.prismaService.boardGame.update({
      where: {
        id,
      },
      data: changes,
    });
  }

  async remove(id: number) {
    return await this.prismaService.boardGame.delete({
      where: {
        id,
      },
    });
  }
}
