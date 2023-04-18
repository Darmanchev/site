import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
   @IsString()
   @IsEmail()
   @IsNotEmpty()
   email: string;

   @IsString()
   @IsNotEmpty()
   @MinLength(4)
   password: string;

   @IsString()
   @IsNotEmpty()
   name: string;
   
   @IsString()
   @IsNotEmpty()
   username: string;
}
