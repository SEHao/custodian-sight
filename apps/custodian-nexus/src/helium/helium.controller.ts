import { Controller, Get } from '@nestjs/common';
import { HeliumService } from './helium.service';

@Controller('helium')
export class HeliumController {
  constructor(private readonly heliumService: HeliumService) {}

  @Get()
  async findOne() {
    return this.heliumService.findOne();
  }
}
