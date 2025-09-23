import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('FITNESS')
export class Fitness {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'FITNESS_ID' })
  fitness_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'FNAME' })
  f_name: string;

  @Column({
    type: 'number',
    precision: 10,
    scale: 0,
    nullable: false,
    name: 'FCATEGORY',
  })
  f_category: number;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'FLEVEL' })
  f_level: string;
}
