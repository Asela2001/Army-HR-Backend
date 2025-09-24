import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Mission } from './mission.entity';

@Entity('EMP_MISSION')
export class EmpMission {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'EMP_NO' })
  emp_no: string;

  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'MISSION_ID' })
  mission_id: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @ManyToOne(() => Mission, (mission) => mission.mission_id)
  @JoinColumn({ name: 'MISSION_ID' })
  mission: Mission;

  @Column({ type: 'date', nullable: false, name: 'START_DATE' })
  start_date: Date;

  @Column({ type: 'date', nullable: false, name: 'EXPIRE_DATE' })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'ROLE' })
  role: string;
}
