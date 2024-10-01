import { Test, TestingModule } from '@nestjs/testing';
import { SensorAverageDataService } from './s_average_data.service';

describe('SAverageDataService', () => {
  let service: SensorAverageDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorAverageDataService],
    }).compile();

    service = module.get<SensorAverageDataService>(SensorAverageDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
