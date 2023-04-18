import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  create(createBlogDto: CreateBlogDto) {
    return this.prisma.post.create({data: createBlogDto});
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({where: {id}});
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prisma.post.update({data: updateBlogDto, where: {id}});
  }

  remove(id: number) {
    return this.prisma.post.delete({where: {id}});
  }
}
