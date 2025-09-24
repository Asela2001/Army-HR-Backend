import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from './service.entity';
import { Unit } from './unit.entity';
import { Rank } from './rank.entity';
import { Regiment } from './regiment.entity';
import { Appointment } from './appointment.entity';

@Entity('POSTING')
export class Posting {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'POSTING_ID' })
  posting_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'SERVICE_ID' })
  service_id: string;

  @ManyToOne(() => Service, (service) => service.service_id)
  @JoinColumn({ name: 'SERVICE_ID' })
  service: Service;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'UNIT_ID' })
  unit_id: string;

  @ManyToOne(() => Unit, (unit) => unit.unit_id)
  @JoinColumn({ name: 'UNIT_ID' })
  unit: Unit;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'RANK_ID' })
  rank_id: string;

  @ManyToOne(() => Rank, (rank) => rank.rank_id)
  @JoinColumn({ name: 'RANK_ID' })
  rank: Rank;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'REGIMENT_ID',
  })
  regiment_id: string;

  @ManyToOne(() => Regiment, (regiment) => regiment.regiment_id)
  @JoinColumn({ name: 'REGIMENT_ID' })
  regiment: Regiment;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'APPOINTMENT_ID',
  })
  appointment_id: string;

  @ManyToOne(() => Appointment, (appointment) => appointment.appointment_id)
  @JoinColumn({ name: 'APPOINTMENT_ID' })
  appointment: Appointment;

  @Column({ type: 'date', nullable: false, name: 'PDATE' })
  p_date: Date;
}
