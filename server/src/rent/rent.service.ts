import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RentService {
  constructor(private prismaService: PrismaService) {}

  create(createRentDto: CreateRentDto) {
    return this.prismaService.rent.create({
      data: {
        ...createRentDto,
      },
    });
  }

  findAll() {
    return this.prismaService.rent.findMany();
  }

  findOne(id: number) {
    return this.prismaService.rent.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateRentDto: UpdateRentDto) {
    return this.prismaService.rent.update({
      where: {
        id,
      },
      data: {
        ...updateRentDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.rent.delete({
      where: {
        id,
      },
    });
  }
}
