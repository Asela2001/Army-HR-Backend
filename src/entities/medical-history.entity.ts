import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Health } from './health.entity';

@Entity('MEDICAL_HISTORY')
export class MedicalHistory {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  mh_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  health_id: string;

  @ManyToOne(() => Health, (health) => health.health_id)
  @JoinColumn({ name: 'health_id' })
  health: Health;

  @Column({ type: 'date', nullable: false })
  check_date: Date;

  @Column({ type: 'date', nullable: false })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  status: string;
}
