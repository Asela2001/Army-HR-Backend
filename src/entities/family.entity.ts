import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('FAMILY')
export class Family {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  family_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  marital_status: string; // Single, Married, Divorce

  @Column({ type: 'varchar2', length: 20, nullable: true })
  spouse_name: string;

  @Column({ type: 'number', nullable: true })
  number_of_children: number;
}
