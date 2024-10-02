import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { FileService } from '../service/file.service';

@ApiTags('Default Sensor Values') 
@Controller('api/defaultSensorsValues')
export class SdataDefaultController {
    constructor(private service: FileService) {}

    @Get(':stationName')
    @ApiOperation({ summary: 'Charger les valeurs par défaut des capteurs' })
    @ApiParam({ name: 'stationName', description: 'Nom de la station', type: String }) 
    async loadDefaultValues(@Param('stationName') station: string) {
       const data = await this.service.loadDefaultSensorDatas(station);
       return data;
    }
}
