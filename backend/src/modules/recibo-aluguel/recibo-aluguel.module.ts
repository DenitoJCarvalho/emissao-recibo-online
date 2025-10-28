import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReciboAluguel, ReciboAluguelSchema } from '@module/recibo-aluguel';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: ReciboAluguel.name,
      schema: ReciboAluguelSchema
    }])
  ],
  exports: [
    MongooseModule
  ],
})
export class ReciboAluguelModule {}
