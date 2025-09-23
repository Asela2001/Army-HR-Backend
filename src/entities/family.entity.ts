import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('FAMILY')
export class Family {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'FAMILY_ID' })
  family_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'EMP_NO' })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @Column({
    type: 'varchar2',
    nullable: false,
    length: 10,
    name: 'MARITAL_STATUS',
  })
  marital_status: string; // Single, Married, Divorce

  @Column({ type: 'varchar2', length: 20, nullable: true, name: 'SPOUSE_NAME' })
  spouse_name: string;

  @Column({ type: 'number', nullable: true, name: 'NUMBER_OF_CHILDREN' })
  number_of_children: number;
}
