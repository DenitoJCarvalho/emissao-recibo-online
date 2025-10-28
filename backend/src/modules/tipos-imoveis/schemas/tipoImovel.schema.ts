import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

import { DocumentoDinamicoBaseRepository } from '@common/repositories';

import { ApiProperty } from '@nestjs/swagger';


export type TipoImovelDocument = HydratedDocument<TipoImovel>;

@Schema()
export class TipoImovel extends DocumentoDinamicoBaseRepository {
  
  @ApiProperty({ example: 'Apartamento', description: 'Descrição do tipo de imóvel' })
  @Prop({ name: 'descricao', type: String, required: true, maxLength: 50 })
  descricao!: string; 

}

export const TipoImovelSchema = SchemaFactory.createForClass(TipoImovel);