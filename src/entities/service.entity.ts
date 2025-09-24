import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Regiment } from './regiment.entity';
import { Unit } from './unit.entity';
import { Rank } from './rank.entity';

@Entity('SERVICE')
export class Service {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'SERVICE_ID' })
  service_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'EMP_NO' })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @Column({
    type: 'varchar2',
    length: 10,
    unique: true,
    nullable: false,
    name: 'SERVICE_NO',
  })
  service_no: string;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'REGIMENT_ID',
  })
  regiment_id: string;

  @ManyToOne(() => Regiment, (regiment) => regiment.regiment_id)
  @JoinColumn({ name: 'REGIMENT_ID' })
  regiment: Regiment;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'UNIT_ID' })
  unit_id: string;

  @ManyToOne(() => Unit, (unit) => unit.unit_id)
  @JoinColumn({ name: 'UNIT_ID' })
  unit: Unit;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'RANK_ID' })
  rank_id: string;

  @ManyToOne(() => Rank, (rank) => rank.rank_id)
  @JoinColumn({ name: 'RANK_ID' })
  rank: Rank;
}
