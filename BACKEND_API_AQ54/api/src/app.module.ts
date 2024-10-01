import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { SdataByDayModule } from './sdata_by_day/sdata_by_day.module';
import { SdataDefaultModule } from './sdata_default/module/sdata_default_module.module';
import { SdataByRangeModule } from './sdata_by_range/sdata_by_range.module';
import { SensorAverageDataModule } from './s_average_data/s_average_data.module';

// Charger les variables d'environnement
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',  // Utilise 'db' par défaut
      port: parseInt(process.env.DB_PORT, 10) || 5432, // Utilise 5432 par défaut
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres', // Assurez-vous que le mot de passe correspond
      database: process.env.DB_NAME || 'aq54', // Assurez-vous que c'est le bon nom de base de données
      entities: ['dist/**/*.entity{.ts,.js}'], // Spécifiez où trouver les entités
      synchronize: true, // À ne pas utiliser en production, car cela peut entraîner des pertes de données
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
