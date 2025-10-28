import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

export type LogSistemaDocument = HydratedDocument<LogSistema>;

@Schema()
export class LogSistema {

  @ApiProperty({ example: '64b8f0c2e1b0f5a6d4c3e8b9', description: 'ID do usuário que realizou a ação' })
  @Prop({ name: 'usuarioId', type: String, required: true, maxLength: 100 })
  usuarioId!: string;

  @ApiProperty({ example: 'johndoe', description: 'Nome do usuário que realizou a ação' })
  @Prop({ name: 'nomeUsuario', type: String, required: true, maxLength: 100 })
  nomeUsuario!: string;

  @ApiProperty({ example: 'CREATE', description: 'Tipo de ação realizada (CREATE, UPDATE, DELETE, etc.)' })
  @Prop({ name: 'acao', type: String, required: true, maxLength: 20 })
  acao!: string;

  @ApiProperty({ example: 'Perfil', description: 'Entidade na qual a ação foi realizada' })
  @Prop({ name: 'descricao', type: String, required: true, maxLength: 50 })
  descricao!: string;

  @ApiProperty({ example: 'ADMIN', description: 'Nível do usuário que realizou a ação' })
  @Prop({ name: 'entidade', type: String, required: true, maxLength: 20 })
  entidade!: string;

  @ApiProperty({ example: 'warn', description: 'Nível do log (info, warn, error)' })
  @Prop({ name: 'nivel', type: String, required: true, maxLength: 20 })
  nivel!: string;

  @ApiProperty({ example: '100.100.101.1', description: 'Endereço IP do usuário que realizou a ação' })
  @Prop({ name: 'ip', type: String, required: false, maxLength: 45 })
  ip?: string;

  @ApiProperty({ example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...', description: 'User agent do navegador do usuário' })
  @Prop({ name: 'userAgent', type: String, required: false, maxLength: 255 })
  userAgent?: string;

  @ApiProperty({ example: '2023-08-01T12:34:56Z', description: 'Data e hora em que a ação foi realizada' })
  @Prop({ name: 'createdAt', type: Date, default: () => new Date() })
  createdAt!: Date;
}
 
export const LogSistemaSchema = SchemaFactory.createForClass(LogSistema);