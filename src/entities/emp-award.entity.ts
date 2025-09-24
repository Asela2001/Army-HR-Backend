import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Award } from './award.entity';

@Entity('EMP_AWARD')
export class EmpAward {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'EMP_NO' })
  emp_no: string;

  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'AWARD_ID' })
  award_id: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @ManyToOne(() => Award, (award) => award.award_id)
  @JoinColumn({ name: 'AWARD_ID' })
  award: Award;

  @Column({ type: 'date', nullable: false, name: 'ACHIEVE_DATE' })
  achieve_date: Date;

  @Column({ type: 'date', nullable: false, name: 'EXPIRE_DATE' })
  expire_date: Date;

  @Column({
    type: 'varchar2',
    length: 50,
    nullable: false,
    name: 'DESCRIPTION',
  })
  description: string;
}
