import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('EMPLOYEE')
export class Employee {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'EMP_NO' })
  emp_no: string;

  @Column({
    type: 'varchar2',
    length: 12,
    unique: true,
    nullable: false,
    name: 'NIC_NO',
  })
  nic_no: string;

  @Column({ type: 'varchar2', length: 20, nullable: true, name: 'PASSPORT_NO' })
  passport_no: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'FIRST_NAME' })
  first_name: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'LAST_NAME' })
  last_name: string;

  @Column({ type: 'date', nullable: false, name: 'DOB' })
  dob: Date;

  @Column({ type: 'char', length: 1, nullable: false, name: 'GENDER' })
  gender: string;

  @Column({ type: 'varchar2', length: 20, nullable: true, name: 'RELIGION' })
  religion: string;

  @Column({
    type: 'varchar2',
    length: 20,
    default: 'Sri Lankan',
    name: 'NATIONALITY',
  })
  nationality: string;

  @Column({ type: 'blob', nullable: true, name: 'PHOTO_ID' })
  photo_id: Buffer;
}
