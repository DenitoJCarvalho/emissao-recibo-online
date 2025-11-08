import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { jwtConfig } from '@config/jwt.config';

import { AuthController, AuthService } from '@common/auth';

import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configureService: ConfigService) => { 
        const jwtSettings = configureService.get('jwt');

        return {
          secret: jwtSettings.secret,
          signOptions: {
            expiresIn: jwtSettings.expiresIn
          }
        }
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
