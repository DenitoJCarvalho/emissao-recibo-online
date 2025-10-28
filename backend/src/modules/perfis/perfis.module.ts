import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Perfil, PerfilSchema } from '@module/perfis/schemas/perfil.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Perfil.name,
      schema: PerfilSchema
    }])
  ],
  exports: [
    MongooseModule
  ]
})
export class PerfisModule {}
