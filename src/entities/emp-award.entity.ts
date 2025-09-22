import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Award } from './award.entity';

@Entity('EMP_AWARD')
export class EmpAward {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  emp_no: string;

  @PrimaryColumn({ type: 'varchar2', length: 10 })
  award_id: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @ManyToOne(() => Award, (award) => award.award_id)
  @JoinColumn({ name: 'award_id' })
  award: Award;

  @Column({ type: 'date', nullable: false })
  achieve_date: Date;

  @Column({ type: 'date', nullable: false })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 50, nullable: false })
  description: string;
}
