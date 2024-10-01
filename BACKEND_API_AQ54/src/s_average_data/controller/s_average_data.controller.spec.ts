import { Test, TestingModule } from '@nestjs/testing';
import { SensorAverageDataController } from './s_average_data.controller';

describe('SAverageDataController', () => {
  let controller: SensorAverageDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorAverageDataController],
    }).compile();

    controller = module.get<SensorAverageDataController>(
      SensorAverageDataController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
