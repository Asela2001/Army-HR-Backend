import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Medical } from './medical.entity';

@Entity('EMP_MEDICAL')
export class EmpMedical {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  emp_no: string;

  @PrimaryColumn({ type: 'varchar2', length: 10 })
  medical_id: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @ManyToOne(() => Medical, (medical) => medical.medical_id)
  @JoinColumn({ name: 'medical_id' })
  medical: Medical;

  @Column({ type: 'date', nullable: false })
  issue_date: Date;

  @Column({ type: 'date', nullable: false })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  status: string;
}
