import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('FITNESS')
export class Fitness {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  fitness_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  f_name: string;

  @Column({ type: 'number', precision: 10, scale: 0, nullable: false })
  f_category: number;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  f_level: string;
}
