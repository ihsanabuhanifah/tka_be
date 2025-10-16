import { Module } from '@nestjs/common';
import { UjianService } from './ujian.service';
import { UjianController } from './ujian.controller';

@Module({
  providers: [UjianService],
  controllers: [UjianController]
})
export class UjianModule {}
