import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('LOAN')
export class Loan {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'LOAN_ID' })
  loan_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'LNAME' })
  l_name: string;

  @Column({
    type: 'number',
    precision: 10,
    scale: 0,
    nullable: false,
    name: 'AMOUNT',
  })
  amount: number;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'DEURATION' })
  duration: string;
}
