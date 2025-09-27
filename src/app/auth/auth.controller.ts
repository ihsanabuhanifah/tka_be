import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginGoogleDto } from './auth.dto';
import { JwtGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() payload: LoginGoogleDto) {
    return this.authService.loginGoogle(payload);
  }

  @UseGuards(JwtGuard) // impelementasi guard pada route , hal ini berarti endpoint profile hanya bisa diakses jika client membawa token
  @Get('profile')
  async profile(@Req() req) {
    // hasil validate dari jwt strategy akan ditambakan pada req.user. isi object req.user akan sama dengan payload dari jwt token. Silahkan coba console.log(req.user)
    const { id } = req.user;
    return this.authService.myProfile(id);
  }
}
