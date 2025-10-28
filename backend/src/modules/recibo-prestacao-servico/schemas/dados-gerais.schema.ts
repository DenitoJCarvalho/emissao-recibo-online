import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

export type DadosGeraisDocument = HydratedDocument<DadosGerais>;

@Schema({ _id: false })
export class DadosGerais { 

  @ApiProperty({ example: '1500.00', description: 'Valor do serviço prestado' })
  @Prop({ name: 'valor', type: String, required: true })
  valor!: string;

  @ApiProperty({ example: '001', description: 'Número do recibo' })
  @Prop({ name: 'numeroRecibo', type: String, required: false})
  numeroRecibo?: string;

  @ApiProperty({ example: 'João da Silva', description: 'Nome do prestador de serviço' })
  @Prop({ name: 'nomePrestador', type: String, required: true })
  nomePagador!: string;

  @ApiProperty({ example: '123.456.789-00', description: 'CPF do prestador de serviço' , required: false})
  @Prop({ name: 'cpfPrestador', type: String, required: false })
  cpfPagador?: string;

  @ApiProperty({ example: 'Serviço de consultoria', description: 'Descrição do serviço prestado' })
  @Prop({ name: 'referencia', type: String, required: false })
  referencia?: string;

  @ApiProperty({ example: '11987654321', description: 'Telefone de contato do solicitante' , required: false})
  @Prop({ name: 'telefone', type: String, required: false })
  telefone?: string;
}

export const DadosGeraisSchema = SchemaFactory.createForClass(DadosGerais);