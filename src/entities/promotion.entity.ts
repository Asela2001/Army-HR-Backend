import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from './service.entity';
import { Rank } from './rank.entity';
import { Appointment } from './appointment.entity';

@Entity('PROMOTION')
export class Promotion {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'PROMOTION_ID' })
  promotion_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'SERVICE_ID' })
  service_id: string;

  @ManyToOne(() => Service, (service) => service.service_id)
  @JoinColumn({ name: 'SERVICE_ID' })
  service: Service;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'RANK_ID' })
  rank_id: string;

  @ManyToOne(() => Rank, (rank) => rank.rank_id)
  @JoinColumn({ name: 'RANK_ID' })
  rank: Rank;

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

  @Column({ type: 'date', nullable: false, name: 'ADATE' })
  a_date: Date;

  @Column({ type: 'varchar2', length: 50, nullable: false, name: 'REASON' })
  reason: string;
}
