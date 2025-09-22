import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('LOAN')
export class Loan {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  loan_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  l_name: string;

  @Column({ type: 'number', precision: 10, scale: 0, nullable: false })
  amount: number;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  duration: string;
}
