import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './entities/book.entity';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from 'src/show/entities/schedules.entity';
import { Seat } from 'src/show/entities/seats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, User, Schedule, Seat])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
