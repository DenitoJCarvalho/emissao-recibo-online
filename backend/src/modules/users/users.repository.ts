import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@module/users';

@Injectable()
export class UsersRepository { 

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) { }

  //#region Persistir um usuário
  /**
   * Persiste um usuário no banco.
   * 
   * @internal
   */
  async create(data: Partial<User>) { 
    return new this.userModel(data).save();
  }

  //#endregion

  //#region Listar usuários
  /**
   * Retorna todos os usuários.
   *  
   * @internal
   */
  async find(page: number, limit: number) {
    const skip = (page - 1) * limit;
    
    const [data, total] = await Promise.all([
      this.userModel.find().skip(skip).limit(limit).exec(),
      this.userModel.countDocuments().exec()
    ]);

    return {
      data, total, page, lastPage: Math.ceil(total / limit)
    }
  }
  //#endregion
  
  //#region Retornar usuário por Id
  /**
   * 
   * Retorna um usuário através do id informado.
   * 
   * @internal
   */
  async findById(id: string) {
    return this.userModel.findById(id).exec();
  }

  //#endregion
  
  //#region Retornar usuário por e-mail 

  /**
   * Retorna um usuário através do e-mail informado.
   * 
   * @internal
   */
  async findByEmail(email: string) { 
    return this.userModel.findOne({ email }).exec();
  }

  //#endregion

  //#region Atualizar usuário

  /**
   * Atualiza um usuário.
   * 
   * @internal
   */
  async update(id: string, data: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }
  
  //#endregion

  //#region Deletar usuário

  /**
   * Deleta um usuário.
   * 
   * @internal
   */
  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
  
  //#endregion
};