import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LogSistema, LogSistemaSchema } from '@module/log-sistema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: LogSistema.name,
      schema: LogSistemaSchema
    }])
  ],
  exports: [
    MongooseModule
  ]
})
  
export class LogSistemaModule {}
