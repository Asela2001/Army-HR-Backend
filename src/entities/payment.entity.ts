import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Allowance } from './allowance.entity';
import { Loan } from './loan.entity';

@Entity('PAYMENT')
export class Payment {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'PAYMENT_ID' })
  payment_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'EMP_NO' })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @Column({
    type: 'varchar2',
    length: 10,
    unique: true,
    nullable: false,
    name: 'PAY_CODE',
  })
  pay_code: string;

  @Column({
    type: 'number',
    precision: 12,
    scale: 2,
    nullable: false,
    name: 'BASIC_PAY',
  })
  basic_pay: number;

  @Column({
    type: 'number',
    precision: 15,
    scale: 0,
    nullable: false,
    name: 'BANK_ACC_NO',
  })
  bank_acc_no: string;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'INSURENCE_NO',
  })
  insurance_no: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'EPF_NO' })
  epf_no: string;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'ALLOWANCE_ID',
  })
  allowance_id: string;

  @ManyToOne(() => Allowance, (allowance) => allowance.allowance_id)
  @JoinColumn({ name: 'ALLOWANCE_ID' })
  allowance: Allowance;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'LOAN_ID' })
  loan_id: string;

  @ManyToOne(() => Loan, (loan) => loan.loan_id)
  @JoinColumn({ name: 'LOAN_ID' })
  loan: Loan;
}
