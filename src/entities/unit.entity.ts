import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('UNIT')
export class Unit {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'UNIT_ID' })
  unit_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'NAME' })
  name: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'LOCATION' })
  location: string;

  @Column({ type: 'varchar2', length: 30, nullable: false, name: 'ADDRESS' })
  address: string;
}
