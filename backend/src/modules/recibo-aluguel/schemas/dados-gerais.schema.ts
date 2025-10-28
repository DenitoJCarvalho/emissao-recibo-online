import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

export type DadosGeraisDocument = HydratedDocument<DadosGerais>;

@Schema({ _id: false })
export class DadosGerais { 

  @ApiProperty({ example: '1500.00', description: 'Valor do aluguel' })
  @Prop({  name: 'valor', type: String, required: true })
  valor!: string;

  @ApiProperty({ example: '08', description: 'Mês de referência do aluguel' })
  @Prop({ name: 'mesReferencia', type: String, required: true })
  mesRerefencia!: string;

  @ApiProperty({ example: '2024', description: 'Ano de referência do aluguel' })
  @Prop({ name: 'ano', type: String, required: true })
  ano!: string;

  @ApiProperty({ example: 'João da Silva', description: 'Nome do locador' })
  @Prop({ name: 'nomeLocador', type: String, required: true })
  nomeLocador!: string;

  @ApiProperty({ example: '123.456.789-00', description: 'CPF do locador' , required: false})
  @Prop({ name: 'cpfLocador', type: String, required: false })
  cpfLocador?: string;

  @ApiProperty({ example: 'Maria Oliveira', description: 'Nome do locatário' })
  @Prop({ name: 'nomeLocatario', type: String, required: true })
  nomeLocatario!: string;

  @ApiProperty({ example: '987.654.321-00', description: 'CPF do locatário' , required: false})
  @Prop({ name: 'cpfLocatario', type: String, required: false })
  cpfLocatario?: string;
}

export const DadosGeraisSchema = SchemaFactory.createForClass(DadosGerais);