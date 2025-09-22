import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('UNIT')
export class Unit {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  unit_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  location: string;

  @Column({ type: 'varchar2', length: 30, nullable: false })
  address: string;
}
