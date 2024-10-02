import { Controller, Get, InternalServerErrorException, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SensorAverageDataService } from '../service/s_average_data.service';

@ApiTags('Sensor Average Data') 
@Controller('/api/stationAverageData')
export class SensorAverageDataController {
  constructor(private sensorAverageDataService: SensorAverageDataService) {}

  @Get(':stationID')
  @ApiOperation({ summary: 'Obtenir les données moyennes par ID de station' })
  @ApiParam({ name: 'stationID', description: 'ID de la station', type: String }) 
  async getSensorsDatas(@Param('stationID') stationName: string) {
    try {
      const data = await this.sensorAverageDataService.loadData(stationName);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        "Echec d'enregistrement dans la base de donnée",
        error,
      );
    }
  }
}
