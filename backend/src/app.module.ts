import configuration from './config/configuration';

import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { UsersModule } from '@module/users/users.module';
import { PerfisModule } from '@module/perfis';
import { TiposImoveisModule } from '@module/tipos-imoveis';
import { TiposPagamentosModule } from './modules/tipos-pagamentos/tipos-pagamentos.module';
import { LogSistemaModule } from './modules/log-sistema/log-sistema.module';
import { ReciboSimplesModule } from './modules/recibo-simples/recibo-simples.module';
import { ReciboAluguelModule } from './modules/recibo-aluguel/recibo-aluguel.module';
import { ReciboPrestacaoServicoModule } from './modules/recibo-prestacao-servico/recibo-prestacao-servico.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{
        ttl: 60000,
        limit: 10
      }]
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env.${process.env.MODE || 'development'}`

    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri')
      })
    }),
    UsersModule,
    PerfisModule,
    TiposImoveisModule,
    TiposPagamentosModule,
    LogSistemaModule,
    ReciboSimplesModule,
    ReciboAluguelModule,
    ReciboPrestacaoServicoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

