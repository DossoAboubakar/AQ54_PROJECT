import { Test, TestingModule } from '@nestjs/testing';
import { SensorDataByRangeController } from './sdata_by_range.controller';

describe('SdataByPeriodController', () => {
  let controller: SensorDataByRangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorDataByRangeController],
    }).compile();

    controller = module.get<SensorDataByRangeController>(SensorDataByRangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
