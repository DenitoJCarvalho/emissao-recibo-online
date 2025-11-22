import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUser, CreateUserDto ,UsersRepository } from '@module/users';
import { Types } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    private readonly usersRepository: UsersRepository
  ) { }

  /**
   * Cria um novo usuário.
   * 
   * @param user  Dados necessário para criar o usuário — veja { @link CreateUserDto}
   * @returns Usuário criado.
   */
  async create(user: CreateUserDto) { 
    return this.usersRepository.create({
      ...user,
      perfilId: new Types.ObjectId(user.perfilId)
    })
  }


}
