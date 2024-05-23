import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService,
  ) {}

  async signIn(usename: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(usename);
    const passwordIsSame = await bcrypt.compare(password, user.password);
    if (!passwordIsSame) {
      return new UnauthorizedException('Invalid credentials');
    }
    const payload = user;
    return {
      token: this.jwt.sign(payload),
    };
  }
}
