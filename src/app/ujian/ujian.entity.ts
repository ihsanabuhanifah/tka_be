import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../auth/auth.entity';
import { Mapel } from '../bank-soal/mapel.entity';
import { BankSoal } from '../bank-soal/bank-soal.entity';

@Entity('ujian')
export class Ujian {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nama_ujian: string;

  @Column({ type: 'text', nullable: true })
  deskripsi: string;

  @Column({ type: 'text', nullable: true })
  kode: string;

  @Column({ type: 'datetime', nullable: false })
  tanggal_mulai: Date;

  @Column({ type: 'datetime', nullable: false })
  tanggal_selesai: Date;

  @Column({ type: 'int', default: 60 })
  durasi_menit: number;

  @Column({ type: 'boolean', default: false })
  is_published: boolean;

  // relasi ke mapel
  @ManyToOne(() => Mapel, (mapel) => mapel.ujians, { onDelete: 'CASCADE' })
  mapel: Mapel;

  // relasi ke user (pembuat ujian)
  @ManyToOne(() => User, (user) => user.ujians, { onDelete: 'CASCADE' })
  user: User;

  // relasi ke bank soal
  @ManyToMany(() => BankSoal, { cascade: true })
  @JoinTable({
    name: 'ujian_soal', // tabel pivot untuk ujian-soal
    joinColumn: { name: 'ujian_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bank_soal_id', referencedColumnName: 'id' },
  })
  soal: BankSoal[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
