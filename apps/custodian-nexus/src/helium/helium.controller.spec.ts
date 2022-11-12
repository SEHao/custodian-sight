import { Test, TestingModule } from '@nestjs/testing';
import { HeliumController } from './helium.controller';

describe('HeliumController', () => {
  let controller: HeliumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeliumController],
    }).compile();

    controller = module.get<HeliumController>(HeliumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
