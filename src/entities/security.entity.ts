import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { SecurityClearance } from './security-clearance.entity';

@Entity('SECURITY')
export class Security {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'SECURITY_ID' })
  security_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'EMP_NO' })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'SLEVEL' })
  s_level: string;

  @Column({ type: 'date', nullable: false, name: 'ISSUE_DATE' })
  issue_date: Date;

  @Column({ type: 'date', nullable: false, name: 'EXPIRE_DATE' })
  expire_date: Date;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'CLEARANCE_ID',
  })
  clearance_id: string;

  @ManyToOne(() => SecurityClearance, (clearance) => clearance.clearance_id)
  @JoinColumn({ name: 'CLEARANCE_ID' })
  clearance: SecurityClearance;
}
