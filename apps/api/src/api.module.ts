import { Module } from '@nestjs/common';
import { JwtModule } from '../../../libs/jwt/src';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [JwtModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
