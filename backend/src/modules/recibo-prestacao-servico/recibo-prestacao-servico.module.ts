import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReciboPrestadorServico, ReciboPrestadorServicoSchema } from '@module/recibo-prestacao-servico';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: ReciboPrestadorServico.name,
      schema: ReciboPrestadorServicoSchema
    }])
  ],
  exports: [
    MongooseModule
  ],
})
export class ReciboPrestacaoServicoModule {}
