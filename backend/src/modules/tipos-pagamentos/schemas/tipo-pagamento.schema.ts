import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { DocumentoDinamicoBaseRepository } from '@common/repositories';

import { ApiProperty } from '@nestjs/swagger';

export type TipoPagamentoDocument = HydratedDocument<TipoPagamento>;

@Schema()
export class TipoPagamento extends DocumentoDinamicoBaseRepository {
  
  @ApiProperty({ example: 'Dinheiro', description: 'Descrição do tipo de pagamento' })
  @Prop({ name: 'descricao', type: String, required: true, maxLength: 50 })
  descricao!: string;

}

export const TipoPagamentoSchema = SchemaFactory.createForClass(TipoPagamento);