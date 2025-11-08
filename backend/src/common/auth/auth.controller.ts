import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { IAuth } from '@common/auth';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController implements IAuth {

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    console.log(req.user);
    return req.user;
  }
}
