
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { DocumentoDinamicoBaseRepository } from '@common/repositories';

import { ApiProperty } from '@nestjs/swagger';

export type PerfilDocument = HydratedDocument<Perfil>;

@Schema()
export class Perfil extends DocumentoDinamicoBaseRepository{ 


  @ApiProperty({ example: 'Usuario', description: 'Descrição do perfil' })
  @Prop({ name: 'descricao', type: String, required: true, maxLength: 50 })
  descricao!: string;
}

export const PerfilSchema = SchemaFactory.createForClass(Perfil);