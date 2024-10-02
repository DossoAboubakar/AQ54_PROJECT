import { Controller, Get, InternalServerErrorException, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'; // Ajout des décorateurs Swagger
import { SensorDataByDayService } from '../service/sensor.service';

@ApiTags('Sensor Data') // Catégorise l'API dans Swagger
@Controller('api/sensorDataByDay')
export class SensorDataByDayController {
  constructor(private sensorDataByDayService: SensorDataByDayService) {}

  @Get(':stationName/:date')
  @ApiOperation({ summary: 'Obtenir les données des capteurs par station et date' }) // Ajoute une description
  @ApiParam({ name: 'stationName', description: 'Nom de la station', type: String }) // Paramètre station
  @ApiParam({ name: 'date', description: 'Date au format YYYY-MM-DD', type: String }) // Paramètre date
  async getSensorsDatas(
    @Param('stationName') station: string,
    @Param('date') selectedDate: string,
  ) {
    try {
      const data = await this.sensorDataByDayService.findData(station, selectedDate);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        "Echec d'enregistrement dans la base de donnée",
      );
    }
  }
}
