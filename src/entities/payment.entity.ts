import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Allowance } from './allowance.entity';
import { Loan } from './loan.entity';

@Entity('PAYMENT')
export class Payment {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  payment_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @Column({ type: 'varchar2', length: 10, unique: true, nullable: false })
  pay_code: string;

  @Column({ type: 'number', precision: 12, scale: 2, nullable: false })
  basic_pay: number;

  @Column({ type: 'number', precision: 15, scale: 0, nullable: false })
  bank_acc_no: number;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  insurance_no: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  epf_no: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  allowance_id: string;

  @ManyToOne(() => Allowance, (allowance) => allowance.allowance_id)
  @JoinColumn({ name: 'allowance_id' })
  allowance: Allowance;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  loan_id: string;

  @ManyToOne(() => Loan, (loan) => loan.loan_id)
  @JoinColumn({ name: 'loan_id' })
  loan: Loan;
}
