import { Module } from '@nestjs/common';
import { BankSoalService } from './bank-soal.service';
import { BankSoalController } from './bank-soal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mapel } from './mapel.entity';
import { BankSoal } from './bank-soal.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Mapel, BankSoal])], 
  providers: [BankSoalService],
  controllers: [BankSoalController]
})
export class BankSoalModule {}
