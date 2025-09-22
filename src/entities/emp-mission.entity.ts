import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Mission } from './mission.entity';

@Entity('EMP_MISSION')
export class EmpMission {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  emp_no: string;

  @PrimaryColumn({ type: 'varchar2', length: 10 })
  mission_id: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @ManyToOne(() => Mission, (mission) => mission.mission_id)
  @JoinColumn({ name: 'mission_id' })
  mission: Mission;

  @Column({ type: 'date', nullable: false })
  start_date: Date;

  @Column({ type: 'date', nullable: false })
  expire_date: Date;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  role: string;
}
