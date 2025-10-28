
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TipoPagamento, TipoPagamentoSchema } from '@module/tipos-pagamentos';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: TipoPagamento.name,
      schema: TipoPagamentoSchema
    }])
  ],
  exports: [
    MongooseModule
  ]
})
export class TiposPagamentosModule {}
