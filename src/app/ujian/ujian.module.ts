import { Module } from '@nestjs/common';
import { UjianService } from './ujian.service';
import { UjianController } from './ujian.controller';
import { BankSoal } from '../bank-soal/bank-soal.entity';
import { Ujian } from './ujian.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BankSoal, Ujian])], 
  providers: [UjianService],
  controllers: [UjianController],
  exports : [UjianService]
})
export class UjianModule {}
