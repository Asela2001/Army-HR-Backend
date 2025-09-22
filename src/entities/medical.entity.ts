import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('MEDICAL')
export class Medical {
  @PrimaryColumn({ type: 'varchar2', length: 10 })
  medical_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  type: string;

  @Column({ type: 'varchar2', length: 10, nullable: false })
  valid_duration: string;
}
