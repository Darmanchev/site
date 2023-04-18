import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/guards.auth';

@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) {}

   @Post('login')
   @UseGuards(LocalAuthGuard)
   async login(@Request() req) {
      return req.user;
   }
   
   @Get('profile')
   profile(@Request() req) {
      return req.user;
   }
   @Post('register')
   register(@Body() createUserDto: CreateUserDto) {
      return this.authService.registerUser(createUserDto)
   }
}
