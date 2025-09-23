import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('MEDICAL')
export class Medical {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'MEDICAL_ID' })
  medical_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'NAME' })
  name: string;

  @Column({ type: 'varchar2', length: 10, nullable: false, name: 'TYPE' })
  type: string;

  @Column({
    type: 'varchar2',
    length: 10,
    nullable: false,
    name: 'VALID_DURATION',
  })
  valid_duration: string;
}
