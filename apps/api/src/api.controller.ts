import { Controller, Get } from '@nestjs/common';
import { JwtService } from '../../../libs/jwt/src';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }
}
