import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@gmail.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
  })
  name: string;
}
