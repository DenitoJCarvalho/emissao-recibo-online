import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';


export type DadosGeraisDocument = HydratedDocument<DadosGerais>;

@Schema({ _id: false })
export class DadosGerais { 

  @ApiProperty({ example: 'R$ 1500,00', description: 'Valor do recibo simples' })
  @Prop({ name: 'valor', type: String, required: true })
  valor!: string;

  @ApiProperty({ example: 'João da Silva', description: 'Nome do pagador' })
  @Prop({ name: 'nomePagador', type: String, required: true })
  nomePagador!: string;
  
  @ApiProperty({ example: '123.456.789-00', description: 'CPF do pagador', required: false })
  @Prop({ name: 'cpfPagador', type: String, required: false })
  cpfPagador?: string;
  
  @ApiProperty({ example: 'Maria Oliveira', description: 'Nome do emissor' })
  @Prop({ name: 'nomeEmissor', type: String, required: true })
  nomeEmissor!: string
  
  @ApiProperty({ example: '987.654.321-00', description: 'CPF do emissor', required: false })
  @Prop({ name: 'cpfEmissor', type: String, required: false })
  cpfEmissor?: string;
  
  @ApiProperty({ example: '(11) 91234-5678', description: 'Telefone de contato', required: false })
  @Prop({ name: 'telefone', type: String, required: false })
  telefone?: string
  
  @ApiProperty({ example: 'Serviços prestados em agosto de 2024', description: 'Referência do recibo simples' })
  @Prop({ name: 'referencia', type: String, required: true })
  referencia!: string;
}

export const DadosGeraisSchema = SchemaFactory.createForClass(DadosGerais);