import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './app/auth/auth.module';
import { BankSoalModule } from './app/bank-soal/bank-soal.module';
import { UjianModule } from './app/ujian/ujian.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // konfigurasi is global untuk semua module
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const { typeOrmConfig } = await import('./config/typeorm.config');
        return typeOrmConfig;
      },
    }),
    AuthModule,
    BankSoalModule,
    UjianModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
