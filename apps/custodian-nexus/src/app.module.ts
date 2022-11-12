import { Module } from '@nestjs/common';
import { HeliumModule } from './helium/helium.module';


@Module({
  imports: [HeliumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
