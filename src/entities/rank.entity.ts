import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('RANK')
export class Rank {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'RANK_ID' })
  rank_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'RNAME' })
  r_name: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'RLEVEL' })
  r_level: string;
}
