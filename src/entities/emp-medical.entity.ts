import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Medical } from './medical.entity';

@Entity('EMP_MEDICAL')
export class EmpMedical {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'EMP_NO' })
  emp_no: string;

  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'MEDICAL_ID' })
  medical_id: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @ManyToOne(() => Medical, (medical) => medical.medical_id)
  @JoinColumn({ name: 'MEDICAL_ID' })
  medical: Medical;

  @Column({ type: 'date', nullable: false, name: 'ISSUE_DATE' })
  issue_date: Date;

  @Column({ type: 'date', nullable: false, name: 'EXPIRE_DATE' })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'STATUS' })
  status: string;
}
