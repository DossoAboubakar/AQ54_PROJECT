import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'; 
import { SensorDataByRangeService } from '../service/sdata_by_period.service';

@ApiTags('Sensor Data by Range') 
@Controller('api/sensorDataByRange')
export class SensorDataByRangeController {
  constructor(
    private readonly sensorDataByRangeService: SensorDataByRangeService,
  ) {}

  @Get(':stationName/:firstDate/:lastDate')
  @ApiOperation({ summary: 'Charger les données de capteur par plage de dates' }) 
  @ApiParam({ name: 'stationName', description: 'Nom de la station', type: String })
  @ApiParam({ name: 'firstDate', description: 'Date de début au format YYYY-MM-DD', type: String }) 
  @ApiParam({ name: 'lastDate', description: 'Date de fin au format YYYY-MM-DD', type: String })
  async loadData(
    @Param('stationName') station: string,
    @Param('firstDate') firstDate: string,
    @Param('lastDate') lastDate: string,
  ) {
    try {
      const data = await this.sensorDataByRangeService.loadData(
        station,
        firstDate,
        lastDate,
      );

      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        "Échec de l'enregistrement des données dans la base",
      );
    }
  }
}
