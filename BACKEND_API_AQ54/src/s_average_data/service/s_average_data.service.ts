import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StationAverageDataEntity } from '../entity/data.entity';
import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { AxiosResponse } from 'axios';

@Injectable()
export class SensorAverageDataService {
  constructor(
    @InjectRepository(StationAverageDataEntity)
    private stationAverageDataRepository: Repository<StationAverageDataEntity>,
    @Inject(HttpService) private readonly httpService: HttpService,
  ) {}

  loadData(station: any) {
    return this.findData(station);
  }

  async findData(stationID: string) {
    try {
      const fetchedData = await this.fetchData(stationID);
      const dataTable = fetchedData['data'];
      await this.saveDataInDatabase(dataTable);
      const sensorData = await this.stationAverageDataRepository.find();
      return sensorData; 
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      throw new Error('Échec de la récupération des données');
    }
  }

  fetchData(stationID: string): Promise<any> {
    const url = `https://airqino-api.magentalab.it/v3/getStationHourlyAvg/${stationID}`;
    return new Promise((resolve, reject) => {
      this.httpService.get(url).subscribe({
        next: (response: AxiosResponse) => {
          console.log('Réponse de l\'API:', response.data);
          resolve(response.data);
        },
        error: (error) => {
          console.error('Erreur lors de l\'appel à l\'API:', error);
          reject(error);
        },
      });
    });
  }

  async saveDataInDatabase(dataTable: any) {
    try {
      for (const data of dataTable) {
        const stationAverageData: StationAverageDataEntity = this.stationAverageDataRepository.create({
          date: data.timestamp,
          co: data.CO,
          temperature: data.T,
          tInt: data['T. int.'],
          no2: data.NO2,
          o3: data.O3,
          pm10: data.PM10,
          pm25: data['PM2.5'],
          rh: data.RH ?? 404
        });
        await this.stationAverageDataRepository.save(stationAverageData);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données dans la base:', error);
      throw new Error('Échec de la sauvegarde des données');
    }
  }
}
