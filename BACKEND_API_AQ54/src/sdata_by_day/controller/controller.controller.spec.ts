import { Test, TestingModule } from '@nestjs/testing';
import { SensorDataByDayController } from './controller.controller';

describe('SensorDataByDayController', () => {
  let controller: SensorDataByDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorDataByDayController],
    }).compile();

    controller = module.get<SensorDataByDayController>(
      SensorDataByDayController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
