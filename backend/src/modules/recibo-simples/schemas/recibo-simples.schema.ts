import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { DadosGerais, DadosGeraisSchema } from '@module/recibo-simples';

import { FormaPagamentoBaseRepository } from '@common/repositories';

import { StatusRecibo } from '@common/enums';

import { ApiProperty } from '@nestjs/swagger';

export type ReciboSimplesDocument = HydratedDocument<ReciboSimples>;

@Schema()
export class ReciboSimples {

  @ApiProperty({ example: '64b64c4f8f1b2c0012345678', description: 'ID do usuário' })
  @Prop({ name: 'usuarioId', type: String, required: true })
  usuarioId!: string;

  @ApiProperty({ example: {}, description: 'Dados gerais do recibo simples', type: () => DadosGerais })
  @Prop({ name: 'dadosGerais', type: DadosGeraisSchema, required: true })
  dadasGerais!: DadosGerais;

  @ApiProperty({ example: {}, description: 'Forma de pagamento do recibo simples' , type: () => FormaPagamentoBaseRepository})
  @Prop({ name: 'formaPagamento', type: Object, required: true })
  formaPagamento!: FormaPagamentoBaseRepository;

  @ApiProperty({ example: 'PENDENTE', description: 'Status do recibo simples', enum: StatusRecibo, default: StatusRecibo.PENDENTE })
  statusRecibo!:  StatusRecibo;

}

export const ReciboSimplesSchema = SchemaFactory.createForClass(ReciboSimples);