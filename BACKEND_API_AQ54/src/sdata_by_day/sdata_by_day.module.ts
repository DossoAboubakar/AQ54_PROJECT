import { Module } from '@nestjs/common';
import { SensorDataByDayService } from './service/sensor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorDataByDayEntity } from './entity/data.entity';
import { SensorDataByDayController } from './controller/controller.controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [TypeOrmModule.forFeature([SensorDataByDayEntity]), HttpModule],
  providers: [SensorDataByDayService],
  exports: [SensorDataByDayService],
  controllers: [SensorDataByDayController],
})
export class SdataByDayModule {}
