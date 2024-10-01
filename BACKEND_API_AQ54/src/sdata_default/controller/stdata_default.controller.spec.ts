import { Test, TestingModule } from '@nestjs/testing';
import { SdataDefaultController } from './stdata_default.controller';

describe('StdataDefaultController', () => {
  let controller: SdataDefaultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SdataDefaultController],
    }).compile();

    controller = module.get<SdataDefaultController>(SdataDefaultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
