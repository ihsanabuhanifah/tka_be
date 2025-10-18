import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  BadRequestException,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { JwtGuard } from '../auth/auth.guard';
import { BankSoalService } from './bank-soal.service';

@UseGuards(JwtGuard)
@Controller('bank-soal')
export class BankSoalController {
  constructor(private readonly bankSoalService: BankSoalService) {}

  // 🟢 Simpan satu soal
  @Post('create')
  async createOne(@Body() body: any, @Req() req) {
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException('User tidak ditemukan');

    return this.bankSoalService.createOne(body, userId);
  }

  @Put('update')
  async updateOne(@Body() body: any, @Req() req) {
    const userId = req.user?.id;

    return this.bankSoalService.updateOne(body, userId);
  }
  @Get("list")
async findAll(@Query() query: any) {
  return this.bankSoalService.findAll(query);
}
}
