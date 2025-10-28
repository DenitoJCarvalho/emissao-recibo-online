import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { EnderecoBaseRepository, FormaPagamentoBaseRepository } from '@common/repositories';

import { ApiProperty } from '@nestjs/swagger';

export type DadosPrestadorServicoDocument = HydratedDocument<DadosPrestadorServico>;

@Schema({ _id: false })
export class DadosPrestadorServico { 

  @ApiProperty({ example: 'João da Silva', description: 'Nome do prestador de serviço' })
  @Prop({ name: 'nomePrestadorServico', type: String, required: true })
  nomePrestadorServico!: string;

  @ApiProperty({ example: '123.456.789-00', description: 'CPF do prestador de serviço' , required: false})
  @Prop({ name: 'cpfPrestadorServico', type: String, required: false })
  cpfPrestadorServico?: string;

  @ApiProperty({ description: 'Endereço do prestador de serviço', type: () => EnderecoBaseRepository })
  @Prop({ type: Object, required: true })
  enderecoPrestadorServico!: EnderecoBaseRepository;

  @ApiProperty({ example: '11987654321', description: 'Telefone de contato do prestador de serviço' , required: false})
  @Prop({ name: 'telefonePrestadorServico', type: String, required: false })
  telefonePrestadorServico?: string;
}

export const DadosPrestadorServicoSchema = SchemaFactory.createForClass(DadosPrestadorServico);
