import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from '../service/file.service';

@Controller('api/defaultSensorsValues')
export class SdataDefaultController {
    constructor(private service :FileService){
    }
    @Get(':station')
    async loadDefaultValues(@Param('station') station) {
       const data = await this.service.loadDefaultSensorDatas(station);
       return data
    }
    
    
}
