import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorDataByDayEntity } from 'src/sdata_by_day/entity/data.entity';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class SensorDataByDayService {
  constructor(
    @InjectRepository(SensorDataByDayEntity)
    private sensorDataByDayRepository: Repository<SensorDataByDayEntity>,
    @Inject(HttpService) private readonly httpService: HttpService,
  ) {}

  async findData(station,selectedDay: string) {
    const fectchedData = await this.fetchData(station,selectedDay);
    const dataTable = fectchedData["raw_data"]
    await this.saveDataInDatabase(dataTable);
    const sensorData = await this.sensorDataByDayRepository.find();
    return dataTable;
  }

  async fetchData(station:string,selectedDay: string ): Promise<any> {
    const url = `https://airqino-api.magentalab.it/getSingleDay/${station}/${selectedDay}`;

    return new Promise((resolve, reject) => {
      this.httpService.get(url).subscribe({
        next: (response: AxiosResponse) => {
          console.log("Réponse de l'API:", response.data);
          resolve(response.data); 
        },
        error: (error) => {
          console.error("Erreur lors de l'appel à l'API:", error);
          reject(error);
        },
      });
    });
  }

  async saveDataInDatabase(dataTable: any) {
  await dataTable.map((data) => {
      const sensorData: SensorDataByDayEntity =
      this.sensorDataByDayRepository.create({
        date: data.utc_timestamp,
        aux1_value: data.AUX1,
        aux2_value: data.AUX2,
        aux3_value: data.AUX3,
        co_value: data.co,
        ext_value: data.extT,
        intT_value: data.intT,
        laT_value: data.lat,
        lon_value: data.lon,
        no2_value: data.no2,
        O3_value: data.o3,
        pm10_value: data.pm10,
        pm25_value: data.pm25,
        rh_value: data.rh,
      });
      this.sensorDataByDayRepository.save(sensorData);

    })
    

  }
}
