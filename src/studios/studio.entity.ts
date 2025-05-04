import { Address } from 'src/addresses/address.entity';
import { Social } from 'src/socials/social.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  Timestamp,
} from 'typeorm';

@Entity('studios')
export class Studio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(() => Address, (address) => address.id)
  address: Relation<Address>;

  @OneToMany(() => Social, (social) => social.id)
  socials: Relation<Social[]>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Timestamp;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Timestamp;
}
