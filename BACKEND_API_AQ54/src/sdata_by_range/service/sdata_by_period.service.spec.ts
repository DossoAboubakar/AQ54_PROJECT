import { Test, TestingModule } from '@nestjs/testing';
import { SensorDataByRangeService } from './sdata_by_period.service';

describe('SdataByRangeService', () => {
  let service: SensorDataByRangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorDataByRangeService],
    }).compile();

    service = module.get<SensorDataByRangeService>(SensorDataByRangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
