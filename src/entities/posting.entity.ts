import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from './service.entity';
import { Unit } from './unit.entity';
import { Rank } from './rank.entity';
import { Regiment } from './regiment.entity';
import { Appointment } from './appointment.entity';

@Entity('POSTING')
export class Posting {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  posting_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  service_id: string;

  @ManyToOne(() => Service, (service) => service.service_id)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  unit_id: string;

  @ManyToOne(() => Unit, (unit) => unit.unit_id)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  rank_id: string;

  @ManyToOne(() => Rank, (rank) => rank.rank_id)
  @JoinColumn({ name: 'rank_id' })
  rank: Rank;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  regiment_id: string;

  @ManyToOne(() => Regiment, (regiment) => regiment.regiment_id)
  @JoinColumn({ name: 'regiment_id' })
  regiment: Regiment;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  appointment_id: string;

  @ManyToOne(() => Appointment, (appointment) => appointment.appointment_id)
  @JoinColumn({ name: 'appointment_id' })
  appointment: Appointment;

  @Column({ type: 'date', nullable: false })
  p_date: Date;
}
