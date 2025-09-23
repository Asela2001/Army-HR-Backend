import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('MISSION')
export class Mission {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'MISSION_ID' })
  mission_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'NAME' })
  name: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'LOCATION' })
  location: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'TYPE' })
  type: string;
}
