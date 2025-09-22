import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('RANK')
export class Rank {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  rank_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  r_name: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  r_level: string;
}
