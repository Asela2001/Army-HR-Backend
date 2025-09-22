import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('CONTACT')
export class Contact {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  contact_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @Column({
    type: 'number',
    precision: 10,
    scale: 0,
    unique: true,
    nullable: false,
  })
  telephone: number;

  @Column({ type: 'varchar2', length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar2', length: 50, nullable: false })
  address: string;
}
