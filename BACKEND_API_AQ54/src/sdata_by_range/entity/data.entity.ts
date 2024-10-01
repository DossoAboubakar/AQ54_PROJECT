import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SENSOR_DATA_BY_RANGE')
export class SensorDataByRangeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  date: Date;

  @Column({ type: 'float' })
  aux1_value: number;

  @Column({ type: 'float' })
  aux2_value: number;

  @Column({ type: 'float' })
  aux3_value: number;

  @Column({ type: 'float' })
  co_value: number;

  @Column({ type: 'float' })
  ext_value: number;

  @Column({ type: 'float' })
  intT_value: number;

  @Column({ type: 'float' })
  laT_value: number;

  @Column({ type: 'float' })
  lon_value: number;

  @Column({ type: 'float' })
  no2_value: number;

  @Column({ type: 'float' })
  O3_value: number;

  @Column({ type: 'float' })
  pm10_value: number;
  
  @Column({ type: 'float' })
  pm25_value: number;

  @Column({ type: 'float' })
  rh_value: number;

}
