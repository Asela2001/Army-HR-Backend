import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('SECURITY_CLEARANCE')
export class SecurityClearance {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'CLEARANCE_ID' })
  clearance_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'SCLEVEL' })
  sc_level: string;

  @Column({ type: 'date', nullable: false, name: 'EXPIRE_DATE' })
  expire_date: Date;
}
