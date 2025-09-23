import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('ALLOWANCE')
export class Allowance {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'ALLOWANCE_ID' })
  allowance_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'NAME' })
  name: string;

  @Column({
    type: 'number',
    precision: 10,
    scale: 0,
    nullable: false,
    name: 'AMOUNT',
  })
  amount: number;

  @Column({ type: 'varchar2', length: 50, nullable: false, name: 'REASON' })
  reason: string;
}
