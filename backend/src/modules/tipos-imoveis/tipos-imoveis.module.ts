import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TipoImovel, TipoImovelSchema } from '@module/tipos-imoveis';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: TipoImovel.name,
      schema: TipoImovelSchema
    }])
  ],
  exports: [
    MongooseModule
  ]
})
export class TiposImoveisModule {}
