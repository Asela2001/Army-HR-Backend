import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('AWARD')
export class Award {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  award_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  type: string;
}
