import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  BadRequestException,
} from "@nestjs/common";
import { JwtGuard } from "../auth/auth.guard";
import { BankSoalService } from "./bank-soal.service";

@UseGuards(JwtGuard)
@Controller("bank-soal")
export class BankSoalController {
  constructor(private readonly bankSoalService: BankSoalService) {}

  // 🟢 Simpan satu soal
  @Post("create")
  async createOne(@Body() body: any, @Req() req) {
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException("User tidak ditemukan");

    return this.bankSoalService.createOne(body, userId);
  }

  // 🟢 Simpan banyak soal sekaligus
//   @Post("create-many")
//   async createMany(@Body() body: any, @Req() req) {
//     const userId = req.user?.id;
//     if (!userId) throw new BadRequestException("User tidak ditemukan");

//     if (!Array.isArray(body))
//       throw new BadRequestException("Data harus berupa array");

//     return this.bankSoalService.createMany(body, userId);
//   }

  // 🟢 Lihat semua soal
  @Get()
  async findAll() {
    return this.bankSoalService.findAll();
  }
}
