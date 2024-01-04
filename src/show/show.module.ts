import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { Show } from './entities/show.entity';
import { Schedule } from './entities/schedules.entity';
import { Seat } from './entities/seats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Show, Schedule, Seat])],
  controllers: [ShowController],
  providers: [ShowService],
})
export class ShowModule {}
