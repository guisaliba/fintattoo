import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
