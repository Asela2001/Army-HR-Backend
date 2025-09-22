import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Fitness } from './fitness.entity';

@Entity('HEALTH')
export class Health {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  health_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'emp_no' })
  employee: Employee;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  blood_group: string;

  @Column({ type: 'number', precision: 6, scale: 0, nullable: false })
  height: number;

  @Column({ type: 'number', precision: 6, scale: 0, nullable: false })
  weight: number;

  @Column({ type: 'number', precision: 10, scale: 0, nullable: false })
  bmi: number;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  fitness_id: string;

  @ManyToOne(() => Fitness, (fitness) => fitness.fitness_id)
  @JoinColumn({ name: 'fitness_id' })
  fitness: Fitness;
}
