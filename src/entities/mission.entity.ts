import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('MISSION')
export class Mission {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  mission_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  location: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  type: string;
}
