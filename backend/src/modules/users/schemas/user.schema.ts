import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

import { Status } from '@module/users';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User { 

  @ApiProperty({ example: 'Jhon Doe', description: 'Nome completo do usuário' })
  @Prop({ name: 'nomeCompleto', type: String, required: true, maxLength: 200 })
  nomeCompleto!: string;

  @ApiProperty({ example: '!123@456&', description: 'Senha do usuário' })
  @Prop({ name: 'senha', type: String, required: true, maxLength: 100 })
  senha!: string;

  @ApiProperty({ example: 'email@email.com.br', description: 'Email do usuário' })
  @Prop({ name: 'email', type: String, required: true, unique: true, maxLength: 100 })
  email!: string;

  @ApiProperty({ example: 'pendente', description: 'Status do usuário', enum: Status })
  @Prop({ name: 'status', enum: Status, default: Status.PENDENTE })
  status!: Status;

  @ApiProperty({ example: '60d5ec49f1d2c916c4a4d3b2', description: 'ID do perfil associado ao usuário' })
  @Prop({ name: 'perfilId', type: MongooseSchema.Types.ObjectId, ref: 'Perfil', required: true })
  perfilId!: Types.ObjectId;

}

export const UserSchema = SchemaFactory.createForClass(User);