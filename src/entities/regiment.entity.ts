import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('REGIMENT')
export class Regiment {
  @PrimaryColumn({ type: 'varchar2', length: 10, name: 'REGIMENT_ID' })
  regiment_id: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'NAME' })
  name: string;

  @Column({ type: 'varchar2', length: 20, nullable: false, name: 'LOCATION' })
  location: string;

  @Column({ type: 'varchar2', length: 30, nullable: false, name: 'ADDRESS' })
  address: string;
}
