import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    const { name } = createRoleDto;

    const newRole = this.prismaService.role.create({
      data: {
        name,
      },
    });

    return newRole;
  }

  async findAll() {
    return await this.prismaService.role.findMany();
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    console.log(updateRoleDto);

    return await this.prismaService.role.update({
      where: {
        id,
      },
      data: {
        name: updateRoleDto.name,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.role.delete({
      where: {
        id,
      },
    });
  }
}
