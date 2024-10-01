import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ISensorObject } from '../interface/interface';
import { Repository } from 'typeorm';
import { DefaultSensorDataEntity } from '../entity/data.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FileService {
  constructor(
    @Inject(HttpService) private readonly httpService: HttpService,
    @InjectRepository(DefaultSensorDataEntity)
    private readonly sensorDataRepository: Repository<DefaultSensorDataEntity>,
  ) {}

  async loadDefaultSensorDatas(station: string) {
    try {
      const data = await this.fetchAndSaveSensorData(station);
      return data;
    } catch (error) {
      console.error('Erreur lors du chargement des données de capteur :', error);
      throw error;
    }
  }

  async fetchAndSaveSensorData(station: string) {
    const currentValuesUrl = `https://airqino-api.magentalab.it/getCurrentValues/${station}`;
    const lastValuesUrl = `https://airqino-api.magentalab.it/getLastValuesRaw/${station}`;

    try {
      const currentResponse: AxiosResponse = await lastValueFrom(
        this.httpService.get(currentValuesUrl),
      );
      console.log("Réponse de l'API pour les valeurs actuelles:", currentResponse.data);

      const dataTable = currentResponse.data['values'];
      const timestamp = currentResponse.data['timestamp'];

      const lastResponse: AxiosResponse = await lastValueFrom(
        this.httpService.get(lastValuesUrl),
      );
      console.log("Réponse de l'API pour les dernières valeurs:", lastResponse.data);

      const lastDataTable = lastResponse.data['values'];
      const lastTimestamp = lastResponse.data['last_timestamp'];

      for (const elt of dataTable) {
        const sensorObject: ISensorObject = {
          name: elt.sensor,
          currentValue: elt.value,
          currentValueDate: timestamp,
          lastValue: null,
          lastValueDate: null,
        };

        const lastElt = lastDataTable.find((e) => e.sensor === elt.sensor);
        if (lastElt) {
          sensorObject.lastValue = lastElt.value;
          sensorObject.lastValueDate = lastTimestamp;
        }

        const existingSensor = await this.sensorDataRepository.findOne({ where: { name: sensorObject.name } });

        if (existingSensor) {
          existingSensor.currentValue = sensorObject.currentValue;
          existingSensor.currentValueDate = sensorObject.currentValueDate;
          existingSensor.lastValue = sensorObject.lastValue;
          existingSensor.lastValueDate = sensorObject.lastValueDate;

          await this.sensorDataRepository.save(existingSensor);
        } else {
          const newSensorData = this.sensorDataRepository.create(sensorObject);
          await this.sensorDataRepository.save(newSensorData);
        }
      }

      const savedData = await this.sensorDataRepository.find();
      return savedData;
    } catch (error) {
      console.error('Erreur lors de la récupération ou de la sauvegarde des données:', error);
      throw error;
    }
  }
}
