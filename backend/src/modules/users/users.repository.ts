import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@module/users';

@Injectable()
export class UsersRepository { 

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) { }

  /**
   * 
   * @param data  dados do usuário a ser criado
   * @returns o usuário criado.
   */
  async create(data: Partial<User>) { 
    return new this.userModel(data).save();
  }

  /**
   *  
   * @returns uma lista de usuários
   */
  async find() {
    return this.userModel.find().exec();
  }
  
  /**
   * 
   * @param id — id do usuário
   * @returns o usuário com o id informado
   */
  async findById(id: string) {
    return this.userModel.findById(id).exec();
  }
  
  /**
   * 
   * @param email — e-mail do usuário
   * @returns o usuário através do e-mail informado
   */
  async findByEmail(email: string) { 
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * 
   * @param id — id do usuário
   * @param data — dados a serem atualizados
   * @returns uma mensagem informando que o usuário foi atualizado
   */
  async update(id: string, data: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }
  
  /**
   * 
   * @param id — id do usuário
   * @returns uma mensagem informando que o usuário foi deletado.
   */
  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
   }
};