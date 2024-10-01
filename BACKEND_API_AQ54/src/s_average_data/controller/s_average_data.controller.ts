import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { SensorAverageDataService } from '../service/s_average_data.service';

@Controller('/api/stationAverageData/')
export class SensorAverageDataController {
  constructor(private sensorAverageDataService: SensorAverageDataService) {}

  @Get(':stationId')
  async getSensorsDatas(@Param('stationId') station) {
    try {
      const data = this.sensorAverageDataService.loadData(station);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        "Echec d'enregistrement dans la base de donnee",
        error,
      );
    }
  }
}
