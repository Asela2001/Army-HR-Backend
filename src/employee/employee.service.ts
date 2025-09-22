import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from 'src/entities/employee.entity';
import { EmpMedical } from 'src/entities/emp-medical.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(EmpMedical)
    private empMedicalRepository: Repository<EmpMedical>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(emp_no: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: { emp_no },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with EMP_NO ${emp_no} not found`);
    }
    return employee;
  }

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  async update(
    emp_no: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    console.log('Updating employee:', { emp_no, updateEmployeeDto });
    const employee = await this.findOne(emp_no);
    console.log('Found employee:', employee);
    Object.assign(employee, updateEmployeeDto);
    const savedEmployee = await this.employeeRepository.save(employee);
    console.log('Updated employee:', savedEmployee);
    return savedEmployee;
  }

  async remove(emp_no: string): Promise<void> {
    console.log('Deleting employee with EMP_NO:', emp_no);
    const employee = await this.findOne(emp_no);
    console.log('Found employee to delete:', employee);
    try {
      await this.employeeRepository.remove(employee);
      console.log('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }
}
