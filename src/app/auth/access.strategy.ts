import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwt_config } from 'src/config/jwt.config';

    const jwt_access = process.env.JWT_ACCESS_TOKEN as string;
   
@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt_access_token',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "6789qwertyuiopolkjhgfds",
    });
  }

  async validate(payload: any) {
    return payload;
  }
}