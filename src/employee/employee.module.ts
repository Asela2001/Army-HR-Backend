import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { EmpMedical } from 'src/entities/emp-medical.entity';
import { Family } from 'src/entities/family.entity';
import { Contact } from 'src/entities/contact.entity';
import { Service } from 'src/entities/service.entity';
import { Health } from 'src/entities/health.entity';
import { Promotion } from 'src/entities/promotion.entity';
import { Posting } from 'src/entities/posting.entity';
import { Payment } from 'src/entities/payment.entity';
import { MedicalHistory } from 'src/entities/medical-history.entity';
import { Security } from 'src/entities/security.entity';
import { EmpAward } from 'src/entities/emp-award.entity';
import { EmpMission } from 'src/entities/emp-mission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Employee,
      EmpMedical,
      Family,
      Contact,
      Service,
      Health,
      Promotion,
      Posting,
      Payment,
      MedicalHistory,
      Security,
      EmpAward,
      EmpMission,
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
