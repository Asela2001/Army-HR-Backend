import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('SECURITY_CLEARANCE')
export class SecurityClearance {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  clearance_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  sc_level: string;

  @Column({ type: 'date', nullable: false })
  expire_date: Date;
}
