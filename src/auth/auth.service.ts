import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
   constructor(
      private jwtService: JwtService,
      private userService: UserService
   ) {}
   

   async validateUser(username: string, password: string) {
      const user = await this.userService.findByUsername(username)
      if (user?.password !== password) {
         throw new UnauthorizedException();
      }
      const payload = {
         username: user.username,
         
      }
      
   }
   
   registerUser(createUserDto: CreateUserDto) {

   }
}