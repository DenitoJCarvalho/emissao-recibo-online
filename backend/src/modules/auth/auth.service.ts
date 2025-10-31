import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { PayloadDto } from '@module/auth'

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService, 
  ) { }

  async generateToken(payload: PayloadDto) { 
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    return this.jwtService.verify(token);
   }
}
