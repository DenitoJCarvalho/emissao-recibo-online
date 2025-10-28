import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema,Types } from 'mongoose';

import { DadosGerais, DadosGeraisSchema } from '@module/recibo-aluguel';

import { EnderecoBaseRepository, FormaPagamentoBaseRepository } from '@common/repositories';

import { StatusRecibo } from '@common/enums';

import { ApiProperty } from '@nestjs/swagger';

export type ReciboAluguelDocument = HydratedDocument<ReciboAluguel>;

@Schema()
export class ReciboAluguel { 

  @ApiProperty({example: '60d5ec49f1d2c916c4a4d3b2', description: 'ID do usuário que criou o recibo'})
  @Prop({ name: 'usuarioId', type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  usuarioId!: Types.ObjectId;

  @ApiProperty({type: DadosGerais, description: 'Dados gerais do recibo de aluguel'})
  @Prop({ type: DadosGeraisSchema, required: true })
  dadosGerais!: DadosGerais;

  @ApiProperty({ description: 'Endereço da propriedade alugada', type: () => EnderecoBaseRepository })
  @Prop({ type: Object, required: true })
  enderecoPropriedade!: EnderecoBaseRepository;

  @ApiProperty({ description: 'Informações sobre a forma de pagamento', type: () => FormaPagamentoBaseRepository })
  @Prop({ type: Object, required: true })
  formaPagamento!: FormaPagamentoBaseRepository;

  @ApiProperty({ example: 'PENDENTE', description: 'Status do recibo de aluguel', enum: StatusRecibo, default: StatusRecibo.PENDENTE })
  @Prop({ type: String, enum: StatusRecibo, default: StatusRecibo.PENDENTE })
  statusRecibo!: StatusRecibo;
}

export const ReciboAluguelSchema = SchemaFactory.createForClass(ReciboAluguel);
