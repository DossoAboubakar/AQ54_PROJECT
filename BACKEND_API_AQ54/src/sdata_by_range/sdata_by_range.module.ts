import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorDataByRangeEntity } from './entity/data.entity';
import { HttpModule } from '@nestjs/axios';
import { SensorDataByDayService } from 'src/sdata_by_day/service/sensor.service';
import { SensorDataByRangeService } from './service/sdata_by_period.service';
import { SensorDataByRangeController } from './controller/sdata_by_range.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SensorDataByRangeEntity]), HttpModule],
  providers: [SensorDataByRangeService],
  exports: [SensorDataByRangeService],
  controllers: [SensorDataByRangeController],
})
export class SdataByRangeModule {}
