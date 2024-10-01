import { Test, TestingModule } from '@nestjs/testing';
import { SensorDataByDayService } from './sensor.service';

describe('SensorService', () => {
  let service: SensorDataByDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorDataByDayService],
    }).compile();

    service = module.get<SensorDataByDayService>(SensorDataByDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
