import { Schedule } from 'src/show/entities/schedules.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unsigned: true })
  userId: number;

  @Column({ unsigned: true })
  scheduleId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.books, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne((type) => Schedule, { onDelete: 'CASCADE' })
  schedule: Schedule;
}
