import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // access employee data
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }

  // access employee family data
  @Get(':emp_no/family')
  findAllFamilies(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllFamilies(emp_no);
  }

  @Get(':emp_no/family/:id')
  findOneFamily(@Param('emp_no') emp_no: string, @Param('id') id: string) {
    return this.employeeService.findOneFamily(emp_no, id);
  }

  @Post(':emp_no/family')
  createFamily(@Param('emp_no') emp_no: string, @Body() dto: CreateFamilyDto) {
    return this.employeeService.createFamily(emp_no, dto);
  }

  @Patch(':emp_no/family/:family_id')
  updateFamily(
    @Param('emp_no') emp_no: string,
    @Param('family_id') family_id: string,
    @Body() dto: UpdateFamilyDto,
  ) {
    return this.employeeService.updateFamily(emp_no, family_id, dto);
  }

  @Delete(':emp_no/family/:family_id')
  deleteFamily(
    @Param('emp_no') emp_no: string,
    @Param('family_id') family_id: string,
  ) {
    return this.employeeService.deleteFamily(emp_no, family_id);
  }

  // for employee contact details
  @Get(':emp_no/contact')
  findAllContacts(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllContacts(emp_no);
  }

  @Get(':emp_no/contact/:contact_id')
  findOneContact(
    @Param('emp_no') emp_no: string,
    @Param('contact_id') contact_id: string,
  ) {
    return this.employeeService.findOneContact(emp_no, contact_id);
  }

  @Post(':emp_no/contact')
  createContact(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreateContactDto,
  ) {
    return this.employeeService.createContact(emp_no, dto);
  }

  @Patch(':emp_no/contact/:contact_id')
  updateContact(
    @Param('emp_no') emp_no: string,
    @Param('contact_id') contact_id: string,
    @Body() dto: UpdateContactDto,
  ) {
    return this.employeeService.updateContact(emp_no, contact_id, dto);
  }

  @Delete(':emp_no/contact/:contact_id')
  deleteContact(
    @Param('emp_no') emp_no: string,
    @Param('contact_id') contact_id: string,
  ) {
    return this.employeeService.deleteContact(emp_no, contact_id);
  }
}
