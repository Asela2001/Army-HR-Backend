import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regiment } from 'src/entities/regiment.entity';
import { Unit } from 'src/entities/unit.entity';
import { Rank } from 'src/entities/rank.entity';
import { Appointment } from 'src/entities/appointment.entity';
import { Allowance } from 'src/entities/allowance.entity';
import { Loan } from 'src/entities/loan.entity';
import { Fitness } from 'src/entities/fitness.entity';
import { SecurityClearance } from 'src/entities/security-clearance.entity';
import { Medical } from 'src/entities/medical.entity';
import { Award } from 'src/entities/award.entity';
import { Mission } from 'src/entities/mission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regiment,
      Unit,
      Rank,
      Appointment,
      Allowance,
      Loan,
      Fitness,
      SecurityClearance,
      Medical,
      Mission,
      Award,
    ]),
  ],
  controllers: [MasterController],
  providers: [MasterService],
})
export class MasterModule {}
