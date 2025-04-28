import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('socials')
export class Social {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  service: string;

  @Column()
  username: string;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.socials)
  user: User;
}