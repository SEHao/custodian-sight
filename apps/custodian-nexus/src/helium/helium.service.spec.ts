import { Test, TestingModule } from '@nestjs/testing';
import { HeliumService } from './helium.service';

describe('HeliumService', () => {
  let service: HeliumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeliumService],
    }).compile();

    service = module.get<HeliumService>(HeliumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
