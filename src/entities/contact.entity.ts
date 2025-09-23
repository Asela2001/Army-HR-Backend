import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('CONTACT')
export class Contact {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'CONTACT_ID' })
  contact_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'EMP_NO' })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @Column({ type: 'varchar2', length: 15, nullable: false, name: 'TELEPHONE' })
  telephone: string;

  @Column({
    type: 'varchar2',
    length: 50,
    unique: true,
    nullable: false,
    name: 'EMAIL',
  })
  email: string;

  @Column({ type: 'varchar2', length: 50, nullable: false, name: 'ADDRESS' })
  address: string;
}
