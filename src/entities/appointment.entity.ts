import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('APPOINTMENT')
export class Appointment {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  appointment_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  location: string;
}
