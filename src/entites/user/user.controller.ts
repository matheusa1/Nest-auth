import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsPublic } from 'src/decorators/isPublic.decorator';
import { createUserBody } from 'src/dtos/create-user-body';
import { UserRepository } from 'src/repositories/user-repository';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  @IsPublic()
  async createUser(@Body() body: createUserBody) {
    const { email, name, password } = body;

    const user = await this.userRepository.create(name, email, password);

    return user;
  }

  @Get()
  async getUsers() {
    const users = await this.userRepository.getUsers();

    return users;
  }
}
