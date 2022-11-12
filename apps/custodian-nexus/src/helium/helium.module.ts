import { Module } from '@nestjs/common';
import { HeliumController } from './helium.controller';
import { HeliumService } from './helium.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
  controllers: [HeliumController],
  providers: [HeliumService],
})
export class HeliumModule {}
