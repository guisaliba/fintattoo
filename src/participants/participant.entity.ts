import { User } from 'src/users/user.entity';
import { Studio } from 'src/studios/studio.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('participants')
export class Participants {
  @PrimaryColumn()
  userId: string;

  @PrimaryColumn()
  studioId: string;

  @Column()
  role: string;

  @Column()
  transferType: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Studio)
  @JoinColumn({ name: 'studioId' })
  studio: Studio;
}
