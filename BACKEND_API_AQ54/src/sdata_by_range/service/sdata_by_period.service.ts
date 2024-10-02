import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorDataByRangeEntity } from '../entity/data.entity';
import { Repository } from 'typeorm';
import { AxiosResponse } from 'axios';

@Injectable()
export class SensorDataByRangeService {
  constructor(
    @Inject(HttpService) private readonly httpService: HttpService,
    @InjectRepository(SensorDataByRangeEntity)
    private readonly sensorDataByRangeRepository: Repository<SensorDataByRangeEntity>,
  ) {}

  loadData(station: string, firstDate: string, lastDate: string) {
    return this.fetchAndSaveSensorData(station, firstDate, lastDate);
  }

  fetchAndSaveSensorData(
    station: string,
    firstDate: string,
    lastDate: string,
  ): Promise<any> { 
    const apiUrl = `https://airqino-api.magentalab.it/getRange/${station}/${firstDate}/${lastDate}`;

    return new Promise((resolve, reject) => {
      this.httpService.get(apiUrl).subscribe({
        next: async (response: AxiosResponse) => {
          console.log(
            "Réponse de l'API pour les valeurs actuelles:",
            response.data,
          );

          const dataTable = response.data['raw_data'];
          const savedData = []; 
          for (const data of dataTable) {
            const sensorData: SensorDataByRangeEntity = this.sensorDataByRangeRepository.create({
              date: data.utc_timestamp,
                aux1_value: data.AUX1,
                aux2_value: data.AUX2,
                aux3_value: data.AUX3,
                co_value: data.co,
                ext_value: data.extT,
                intT_value: data.intT,
                laT_value: data.lat??404,
                lon_value: data.lon,
                no2_value: data.no2,
                O3_value: data.o3,
                pm10_value: data.pm10,
                pm25_value: data.pm25,
                rh_value: data.rh ?? 404

            });

           
            await this.sensorDataByRangeRepository.save(sensorData);
            savedData.push(sensorData); 
          }

          resolve(savedData);
        },
        error: (error) => {
          console.error(
            "Erreur lors de l'appel pour les valeurs actuelles:",
            error,
          );
          reject(error); 
        },
      });
    });
  }
}
