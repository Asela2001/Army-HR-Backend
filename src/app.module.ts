import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Family } from './entities/family.entity';
import { Contact } from './entities/contact.entity';
import { Regiment } from './entities/regiment.entity';
import { Unit } from './entities/unit.entity';
import { Rank } from './entities/rank.entity';
import { Service } from './entities/service.entity';
import { Appointment } from './entities/appointment.entity';
import { Promotion } from './entities/promotion.entity';
import { Posting } from './entities/posting.entity';
import { Payment } from './entities/payment.entity';
import { Allowance } from './entities/allowance.entity';
import { Loan } from './entities/loan.entity';
import { Health } from './entities/health.entity';
import { Fitness } from './entities/fitness.entity';
import { MedicalHistory } from './entities/medical-history.entity';
import { Security } from './entities/security.entity';
import { SecurityClearance } from './entities/security-clearance.entity';
import { Medical } from './entities/medical.entity';
import { EmpMedical } from './entities/emp-medical.entity';
import { Award } from './entities/award.entity';
import { Mission } from './entities/mission.entity';
import { EmpAward } from './entities/emp-award.entity';
import { EmpMission } from './entities/emp-mission.entity';
import { EmployeeModule } from './employee/employee.module';
import { MasterModule } from './master/master.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'ARMY_HR',
      password: 'army',
      serviceName: 'XEPDB1',
      entities: [
        Employee,
        Family,
        Contact,
        Regiment,
        Unit,
        Rank,
        Service,
        Appointment,
        Promotion,
        Posting,
        Payment,
        Allowance,
        Loan,
        Health,
        Fitness,
        MedicalHistory,
        Security,
        SecurityClearance,
        Medical,
        EmpMedical,
        Award,
        Mission,
        EmpAward,
        EmpMission,
      ],
      synchronize: false,
    }),
    EmployeeModule,
    MasterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
