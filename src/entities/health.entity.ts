import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Fitness } from './fitness.entity';

@Entity('HEALTH')
export class Health {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'HEALTH_ID' })
  health_id: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'EMP_NO' })
  emp_no: string;

  @ManyToOne(() => Employee, (employee) => employee.emp_no)
  @JoinColumn({ name: 'EMP_NO' })
  employee: Employee;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'BLOOD_GROUP',
  })
  blood_group: string;

  @Column({
    type: 'number',
    precision: 6,
    scale: 0,
    nullable: false,
    name: 'HEIGHT',
  })
  height: number;

  @Column({
    type: 'number',
    precision: 6,
    scale: 0,
    nullable: false,
    name: 'WEIGHT',
  })
  weight: number;

  @Column({
    type: 'number',
    precision: 10,
    scale: 0,
    nullable: false,
    name: 'BMI',
  })
  bmi: number;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'FITNESS_ID' })
  fitness_id: string;

  @ManyToOne(() => Fitness, (fitness) => fitness.fitness_id)
  @JoinColumn({ name: 'FITNESS_ID' })
  fitness: Fitness;
}
