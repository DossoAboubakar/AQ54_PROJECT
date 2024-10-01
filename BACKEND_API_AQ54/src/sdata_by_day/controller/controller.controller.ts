import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { SensorDataByDayService } from '../service/sensor.service';

@Controller('api/sensorDataByDay')
export class SensorDataByDayController {
  constructor(private sensorDataByDayService: SensorDataByDayService) {}

  @Get(':station/:date')
  async getSensorsDatas(
    @Param('station') station,
    @Param('date') selectedDate: string,
  ) {
    try {
      const data = await this.sensorDataByDayService.findData(
        station,
        selectedDate,
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        "Echec d'enregistrement dans la base de donnee",
      );
    }
  }
}
