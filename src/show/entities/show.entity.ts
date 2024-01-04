import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShowCategory } from '../types/show-category';
import { Schedule } from './schedules.entity';

@Entity('shows')
export class Show {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: ShowCategory })
  category: ShowCategory;

  @Column()
  place: string;

  @Column()
  price: string;

  @Column()
  thumbnail: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Schedule, (schedule) => schedule.show, { cascade: true })
  schedules: Schedule[];
}
