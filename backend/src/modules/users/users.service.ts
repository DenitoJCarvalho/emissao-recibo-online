import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserDto, ResponseUserDto, ResponsePartialDto, UpdateUserDto, UsersRepository } from '@module/users';
import { Types } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    private readonly usersRepository: UsersRepository
  ) { }

  //#region Criar usuário
  /**
   * Cria um novo usuário.
   * 
   * @param user  Dados necessário para criar o usuário — veja {@link CreateUserDto}
   * @returns Usuário criado.
   */
  async create(user: CreateUserDto) { 
    return this.usersRepository.create({
      ...user,
      perfilId: new Types.ObjectId(user.perfilId)
    })
  }
//#endregion

  //#region Selecionar usuários
  
  /**
   * Retorna todos os usuários. 
   * @returns Lista de usuários
   */
  async find(page: number, limit: number) { 
    return this.usersRepository.find(page, limit);
  }
  //#endregion

  //#region Selecionar usuário por ID

  /**
   * 
   * @param id Id do usuário
   * @returns Objeto {@link ResponseUserDto} com dados do usuário.
   */
  async findById(id: string): Promise<ResponseUserDto>{
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }
    
    return {
      id: user._id.toString(),
      nomeCompleto: user.nomeCompleto,
      email: user.email,
      status: user.status,
      perfilId: user.perfilId.toString()
    }
   }
  //#endregion

  //#region Selecionar usuário por Email
  /**
   * 
   * @param email E-mail do usuário.
   * @returns Objeto {@link ResponseUserDto} com dados do usuário
   */
  async findByEmail(email: string): Promise<ResponseUserDto> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException(`Usuário com e-mail ${email} não encontrado.`);
    }
    
    return {
      id: user._id.toString(),
      nomeCompleto: user.nomeCompleto,
      email: user.email,
      status: user.status,
      perfilId: user.perfilId.toString()
    }
   }
  //#endregion

  //#region Atualizar usuário
  
  async update(id: string, data: Partial<UpdateUserDto>): Promise<ResponsePartialDto> {
    const dataToUpdate: any = {};

    if (data.nomeCompleto !== undefined) { 
      dataToUpdate.nomeCompleto = data.nomeCompleto;
    }

    if (data.email !== undefined) { 
      dataToUpdate.email = data.email;
    }

    if (data.status !== undefined) { 
      dataToUpdate.status = data.status;
    }

    if (data.perfilId !== undefined) { 
      dataToUpdate.perfilId = new Types.ObjectId(data.perfilId);
    }

    const dataUpdated = await this.usersRepository.update(id, dataToUpdate);
    
    if (!dataUpdated) { 
      throw new NotFoundException(`Erro ao atualizar usário com ID ${id}. `);
    }

    return {
      id: dataUpdated._id.toString(),
      nomeCompleto: dataUpdated.nomeCompleto,
      email: dataUpdated.email,
      status: dataUpdated.status,
      perfilId: dataUpdated.perfilId.toString()
    }
    
}
   
  //#endregion

  //#region Deletar usuário
  async delete(id: string) { 
    const dataDeleted = await this.usersRepository.delete(id);

    if (!dataDeleted) { 
      throw new NotFoundException(`Erro ao deletar usário com ID ${id}. `);
    }

    return `Usuário com ID: ${id} removido com sucesso.`;
  }
  //#endregion
}
