import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({data: createUserDto});
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({where: {username}});

  }
  findOne(id: number) {
    return this.prisma.user.findUnique({where: {id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({data: updateUserDto, where: {id}});
  }

  remove(id: number) {
    return this.prisma.user.delete({where: {id}});
  }
}
