import { Studio } from 'src/studios/studio.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Timestamp,
} from 'typeorm';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.appointments)
  user: Relation<User>;

  @ManyToOne(() => Studio, (studio) => studio.appointments)
  studio: Relation<Studio>;

  @Column()
  date: Timestamp;

  @Column()
  duration: number;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Timestamp;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Timestamp;
}
