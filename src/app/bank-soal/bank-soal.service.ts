import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankSoal } from './bank-soal.entity';
import { Mapel } from './mapel.entity';
import { User } from '../auth/auth.entity';

@Injectable()
export class BankSoalService {
  constructor(
    @InjectRepository(BankSoal)
    private readonly bankSoalRepo: Repository<BankSoal>,
  ) {}

  async createOne(data: any, userId: number): Promise<any> {
    const { mapel_id, materi, point, tipe, soal, jawaban } = data;

    // const mapel = await this.mapelRepo.findOne({ where: { id: mapel_id } });
    delete data.id;

    const save = await this.bankSoalRepo.save({
      ...data,
      mapel : {
        id : 1
      },
      jawaban: jawaban ? JSON.stringify(jawaban) : null,
      soal: soal ? JSON.stringify(soal) : null,
      user: {
        id: userId,
      },
    });
    return {
      status: `Success `,
      message: 'Buku berhasil di update',
      data: save,
    };
  }

  //   async createMany(dataArray: any[], userId: number) {
  //     if (!Array.isArray(dataArray) || dataArray.length === 0)
  //       throw new BadRequestException("Data soal tidak valid");

  //     const user = await this.userRepo.findOne({ where: { id: userId } });
  //     if (!user) throw new BadRequestException("User tidak ditemukan");

  //     const soals: BankSoal[] = [];

  //     for (const data of dataArray) {
  //       const mapel = await this.mapelRepo.findOne({
  //         where: { id: data.mapel_id },
  //       });
  //       if (!mapel)
  //         throw new BadRequestException(`Mapel ID ${data.mapel_id} tidak ditemukan`);

  //       const soal = this.bankSoalRepo.create({
  //         materi: data.materi,
  //         mapel,
  //         point: data.point,
  //         tipe: data.tipe,
  //         soal: JSON.stringify(data.soal),
  //         jawaban: data.jawaban ? JSON.stringify(data.jawaban) : null,
  //         user,
  //       });
  //       soals.push(soal);
  //     }

  //     return this.bankSoalRepo.save(soals);
  //   }

  async findAll() {
    return this.bankSoalRepo.find({
      relations: ['mapel', 'user'],
      order: { created_at: 'DESC' },
    });
  }
}
