import { RoleGuard } from './../role.guard';
import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '../role.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    const { client_id, client_secret, grant_type, username, password } = body;

    const attributes = {
      client_id,
      client_secret,
      grant_type,
      username,
      password,
    };

    console.log(attributes);

    return this.authService.login(attributes);
  }

  //@Role('admin')
  @UseGuards(JwtGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Wagner Castro',
    };
  }
}
