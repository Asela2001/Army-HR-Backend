import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { EmpMedical } from 'src/entities/emp-medical.entity';
import { Family } from 'src/entities/family.entity';
import { Contact } from 'src/entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, EmpMedical, Family, Contact])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
