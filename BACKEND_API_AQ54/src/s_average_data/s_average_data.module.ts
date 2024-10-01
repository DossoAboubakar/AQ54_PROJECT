import { Module } from '@nestjs/common';
import { SensorAverageDataService } from './service/s_average_data.service';
import { SensorAverageDataController } from './controller/s_average_data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { StationAverageDataEntity } from './entity/data.entity';
@Module({
  imports: [TypeOrmModule.forFeature([StationAverageDataEntity]), HttpModule],
  providers: [SensorAverageDataService],
  exports: [SensorAverageDataService],
  controllers: [SensorAverageDataController],
})
export class SensorAverageDataModule {}
