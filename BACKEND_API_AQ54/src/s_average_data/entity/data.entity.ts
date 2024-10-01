import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('STATION_AVERAGE_DATA')
export class StationAverageDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'float' })
  co: number;

  @Column({ type: 'float' })
  temperature: number;

  @Column({ name: 't_int', type: 'float' })
  tInt: number;

  @Column({ type: 'float' })
  no2: number;

  @Column({ type: 'float' })
  o3: number;

  @Column({ type: 'float' })
  pm10: number;

  @Column({ type: 'float' })
  pm25: number;

  @Column({ type: 'float' })
  rh: number;
}
