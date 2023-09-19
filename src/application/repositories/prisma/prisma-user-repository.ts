import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from '../user-repository';
import { ConflictException, Injectable } from '@nestjs/common';
import {
  IUserRepositoryCreate,
  IUserRepositoryGetUsers,
} from 'src/application/types/userRepository';
import * as bcript from 'bcrypt';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    name: string,
    email: string,
    password: string,
  ): Promise<IUserRepositoryCreate> {
    const emailAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (emailAlreadyExists) {
      throw new ConflictException({
        message: [
          {
            property: 'email',
            constraints: {
              unique: 'Email já cadastrado',
            },
          },
        ],
        statusCode: 409,
        error: 'Conflict',
      });
    }

    const criptedPassword = await bcript.hashSync(password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        email: email,
        name: name,
        password: criptedPassword,
      },
    });

    return {
      ...newUser,
      password: undefined,
    };
  }

  async getUsers(): Promise<IUserRepositoryGetUsers> {
    const users = await this.prisma.user.findMany();

    return users;
  }
}
