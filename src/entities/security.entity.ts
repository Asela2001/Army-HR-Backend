import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { SecurityClearance } from './security-clearance.entity';

@Entity('SECURITY')
export class Security {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  security_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  s_level: string;

  @Column({ type: 'date', nullable: false })
  issue_date: Date;

  @Column({ type: 'date', nullable: false })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  clearance_id: string;

  @ManyToOne(() => SecurityClearance, (clearance) => clearance.clearance_id)
  @JoinColumn({ name: 'clearance_id' })
  clearance: SecurityClearance;
}
