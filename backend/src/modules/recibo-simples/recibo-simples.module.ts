
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReciboSimples, ReciboSimplesSchema } from '@module/recibo-simples';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: ReciboSimples.name,
      schema: ReciboSimplesSchema
    }])
  ],
  exports: [
    MongooseModule
  ]
})
export class ReciboSimplesModule {}
