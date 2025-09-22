import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from './service.entity';
import { Rank } from './rank.entity';
import { Appointment } from './appointment.entity';

@Entity('PROMOTION')
export class Promotion {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  promotion_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  service_id: string;

  @ManyToOne(() => Service, (service) => service.service_id)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  rank_id: string;

  @ManyToOne(() => Rank, (rank) => rank.rank_id)
  @JoinColumn({ name: 'rank_id' })
  rank: Rank;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  appointment_id: string;

  @ManyToOne(() => Appointment, (appointment) => appointment.appointment_id)
  @JoinColumn({ name: 'appointment_id' })
  appointment: Appointment;

  @Column({ type: 'date', nullable: false })
  a_date: Date;

  @Column({ type: 'varchar2', length: 50, nullable: false })
  reason: string;
}
