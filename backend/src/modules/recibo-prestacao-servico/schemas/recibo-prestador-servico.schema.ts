import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

import { DadosGerais, DadosPrestadorServico } from '@module/recibo-prestacao-servico';

import { FormaPagamentoBaseRepository } from '@common/repositories';

import { ApiProperty } from '@nestjs/swagger';

export type ReciboPrestadorServicoDocument = HydratedDocument<ReciboPrestadorServico>;

@Schema({ _id: true })
export class ReciboPrestadorServico {

  @ApiProperty({example: '60d5ec49f1d2c916c4a4d3b2', description: 'ID do usuário que criou o recibo'})
  @Prop({ name: 'usuarioId', type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  usuarioId!: Types.ObjectId;

  @ApiProperty({type:() => DadosGerais, description: 'Dados gerais do recibo de prestação de serviço', required: true})
  @Prop({ type: Object, required: true })
  dadosGerais!: DadosGerais;

  @ApiProperty({type: () => DadosPrestadorServico, description: 'Dados do prestador de serviço', required: true })
  @Prop({ type: Object, required: true })
  dadosPrestadorServico!: DadosPrestadorServico;
  
  @ApiProperty({ description: 'Informações sobre a forma de pagamento', type: () => FormaPagamentoBaseRepository, required: true })
  @Prop({ type: Object, required: true })
  formaPagamento!: FormaPagamentoBaseRepository;
  
}
 
export const ReciboPrestadorServicoSchema = SchemaFactory.createForClass(ReciboPrestadorServico);