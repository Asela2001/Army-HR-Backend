import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Regiment } from './regiment.entity';
import { Unit } from './unit.entity';
import { Rank } from './rank.entity';

@Entity('SERVICE')
export class Service {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  service_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @Column({ type: 'varchar2', length: 10, unique: true, nullable: false })
  service_no: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  regiment_id: string;

  @ManyToOne(() => Regiment, (regiment) => regiment.regiment_id)
  @JoinColumn({ name: 'regiment_id' })
  regiment: Regiment;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  unit_id: string;

  @ManyToOne(() => Unit, (unit) => unit.unit_id)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  rank_id: string;

  @ManyToOne(() => Rank, (rank) => rank.rank_id)
  @JoinColumn({ name: 'rank_id' })
  rank: Rank;
}
