import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { SdataByDayModule } from './sdata_by_day/sdata_by_day.module';
import { SdataDefaultModule } from './sdata_default/module/sdata_default_module.module';
import { SdataByRangeModule } from './sdata_by_range/sdata_by_range.module';
import { SensorAverageDataModule } from './s_average_data/s_average_data.module';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',  
      port: parseInt(process.env.DB_PORT) || 5432, 
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres', 
      database: process.env.DB_NAME || 'AQ54_DB', 
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SdataByDayModule,
    SdataDefaultModule,
    SdataByRangeModule,
    SensorAverageDataModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
