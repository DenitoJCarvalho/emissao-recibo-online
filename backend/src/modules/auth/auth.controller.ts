import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { IAuth } from '@module/auth';
import{ JwtAuthGuard } from '@module/auth/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController implements IAuth {

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    console.log(req.user);
    return req.user;
  }
}
