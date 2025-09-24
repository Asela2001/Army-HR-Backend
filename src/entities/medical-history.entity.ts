import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Health } from './health.entity';

@Entity('MEDICAL_HISTORY')
export class MedicalHistory {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'MH_ID' })
  mh_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'HEALTH_ID' })
  health_id: string;

  @ManyToOne(() => Health, (health) => health.health_id)
  @JoinColumn({ name: 'HEALTH_ID' })
  health: Health;

  @Column({ type: 'date', nullable: false, name: 'CHECK_DATE' })
  check_date: Date;

  @Column({ type: 'date', nullable: false, name: 'EXPIRE_DATE' })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'STATUS' })
  status: string;
}
