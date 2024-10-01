import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultSensorDataEntity } from '../entity/data.entity';
import { HttpModule } from '@nestjs/axios';
import { SdataDefaultController } from '../controller/stdata_default.controller';
import { FileService } from '../service/file.service';
@Global()
@Module({
    imports : [TypeOrmModule.forFeature([DefaultSensorDataEntity]),HttpModule],
    providers:[FileService],
    exports:[FileService],
    controllers: [SdataDefaultController]

})
export class SdataDefaultModule {}
