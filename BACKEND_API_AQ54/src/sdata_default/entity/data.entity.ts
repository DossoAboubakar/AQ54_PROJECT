import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DEFAULT_SENSOR_DATA')
export class DefaultSensorDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'float' })
  lastValue: number;

  @Column({ type: 'timestamp' })
  lastValueDate: Date;

  @Column({ type: 'float' })
  currentValue: number;

  @Column({ type: 'timestamp' })
  currentValueDate: Date;
}
