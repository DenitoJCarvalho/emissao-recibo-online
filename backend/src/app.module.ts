import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
      envFilePath: `.env${process.env.MODE || 'development'}`
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
