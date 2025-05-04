import { Studio } from 'src/studios/studio.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
  Timestamp,
} from 'typeorm';

@Entity('socials')
export class Social {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  service: string;

  @Column()
  username: string;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.socials)
  user: Relation<User>;

  @ManyToOne(() => Studio, (studio) => studio.socials)
  studio: Relation<Studio>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Timestamp;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Timestamp;
}
