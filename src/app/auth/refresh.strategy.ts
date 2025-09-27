import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwt_config } from 'src/config/jwt.config';
 const jwt_refresh = process.env.JWT_REFRESh_TOKEN as string;

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt_refresh_token',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "kfjhkaujhvbkufbdhkuhiubhi",
    });
  }

  async validate(payload: any) {
    return payload;
  }
}