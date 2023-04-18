import { User } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBlogDto {
   @IsString()
   @IsNotEmpty()
   title: string;

   @IsString()
   @IsNotEmpty()
   content: string;


   authorId: number;
}
