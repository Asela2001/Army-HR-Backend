import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('REGIMENT')
export class Regiment {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  regiment_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  location: string;

  @Column({ type: 'varchar2', length: 30, nullable: false })
  address: string;
}
