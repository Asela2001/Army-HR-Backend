import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('ALLOWANCE')
export class Allowance {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  allowance_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  name: string;

  @Column({ type: 'number', precision: 10, scale: 0, nullable: false })
  amount: number;

  @Column({ type: 'varchar2', length: 50, nullable: false })
  reason: string;
}
