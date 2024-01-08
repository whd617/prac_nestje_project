import { PickType } from '@nestjs/swagger';
import { Schedule } from '../entities/schedules.entity';

export class CreateScheduleDto extends PickType(Schedule, ['date', 'time']) {}
