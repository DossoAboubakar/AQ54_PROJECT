import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { SensorDataByRangeService } from '../service/sdata_by_period.service';

@Controller('api/sensorDataByRange/')
export class SensorDataByRangeController {
  constructor(
    private readonly sensorDataByRangeService: SensorDataByRangeService,
  ) {}

  @Get(':station/:firstDate/:lastDate')
  async loadData(
    @Param('station') station: string,
    @Param('firstDate') firstDate: string,
    @Param('lastDate') lastDate: string,
  ) {
    try {
      const data = await this.sensorDataByRangeService.loadData(
        station,
        firstDate,
        lastDate,
      );

      return data 
    } catch (error) {
      throw new InternalServerErrorException(
        "Échec de l'enregistrement des données dans la base",
      );
    }
  }
}
