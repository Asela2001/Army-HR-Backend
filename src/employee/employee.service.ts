import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Family } from 'src/entities/family.entity';
import { Employee } from 'src/entities/employee.entity';
import { EmpMedical } from 'src/entities/emp-medical.entity';
import { Contact } from 'src/entities/contact.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(EmpMedical)
    private empMedicalRepository: Repository<EmpMedical>,
    @InjectRepository(Family)
    private familyRepository: Repository<Family>,
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
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

  // family details
  async findAllFamilies(emp_no: string): Promise<Family[]> {
    await this.validateEmployeeExists(emp_no);
    return this.familyRepository.find({
      where: { emp_no },
      relations: ['employee'],
    });
  }

  async findOneFamily(emp_no: string, family_id: string): Promise<Family> {
    await this.validateEmployeeExists(emp_no);
    const item = await this.familyRepository.findOne({
      where: { family_id, emp_no },
      relations: ['employee'],
    });
    if (!item)
      throw new NotFoundException(
        `Family ${family_id} for ${emp_no} not found`,
      );
    return item;
  }

  async createFamily(emp_no: string, dto: CreateFamilyDto): Promise<Family> {
    await this.validateEmployeeExists(emp_no);
    console.log('Received DTO:', dto);
    const family = this.familyRepository.create({
      family_id: dto.family_id,
      emp_no: dto.emp_no,
      marital_status: dto.marital_status,
      spouse_name: dto.spouse_name,
      number_of_children: dto.number_of_children,
    });
    console.log('Created family entity:', family);
    return this.familyRepository.save(family);
  }

  async updateFamily(
    emp_no: string,
    family_id: string,
    dto: UpdateFamilyDto,
  ): Promise<Family> {
    await this.validateEmployeeExists(emp_no);
    const family = await this.familyRepository.findOne({
      where: { family_id, emp_no },
    });
    if (!family) {
      throw new NotFoundException(
        `Family ${family_id} for ${emp_no} not found`,
      );
    }
    console.log('Received Update DTO:', dto);
    Object.assign(family, {
      marital_status: dto.marital_status ?? family.marital_status,
      spouse_name: dto.spouse_name ?? family.spouse_name,
      number_of_children: dto.number_of_children ?? family.number_of_children,
    });
    console.log('Updated family entity:', family);
    return this.familyRepository.save(family);
  }

  async deleteFamily(emp_no: string, family_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const family = await this.familyRepository.findOne({
      where: { family_id, emp_no },
    });
    if (!family) {
      throw new NotFoundException(
        `Family ${family_id} for ${emp_no} not found`,
      );
    }
    console.log('Deleting family entity:', family);
    await this.familyRepository.remove(family);
  }

  // for employee contact details
  async findAllContacts(emp_no: string): Promise<Contact[]> {
    await this.validateEmployeeExists(emp_no);
    return this.contactRepository.find({
      where: { emp_no },
      relations: ['employee'],
    });
  }

  async findOneContact(emp_no: string, contact_id: string): Promise<Contact> {
    await this.validateEmployeeExists(emp_no);
    const contact = await this.contactRepository.findOne({
      where: { contact_id, emp_no },
      relations: ['employee'],
    });
    if (!contact) {
      throw new NotFoundException(
        `Contact ${contact_id} for ${emp_no} not found`,
      );
    }
    return contact;
  }

  async createContact(emp_no: string, dto: CreateContactDto): Promise<Contact> {
    await this.validateEmployeeExists(emp_no);
    console.log('Received Contact DTO:', dto);
    const contact = this.contactRepository.create({
      contact_id: dto.contact_id,
      emp_no: dto.emp_no,
      telephone: dto.telephone,
      email: dto.email,
      address: dto.address,
    });
    console.log('Created contact entity:', contact);
    return this.contactRepository.save(contact);
  }

  async updateContact(
    emp_no: string,
    contact_id: string,
    dto: UpdateContactDto,
  ): Promise<Contact> {
    await this.validateEmployeeExists(emp_no);
    const contact = await this.contactRepository.findOne({
      where: { contact_id, emp_no },
    });
    if (!contact) {
      throw new NotFoundException(
        `Contact ${contact_id} for ${emp_no} not found`,
      );
    }
    console.log('Received Update Contact DTO:', dto);
    Object.assign(contact, {
      telephone: dto.telephone ?? contact.telephone,
      email: dto.email ?? contact.email,
      address: dto.address ?? contact.address,
    });
    console.log('Updated contact entity:', contact);
    return this.contactRepository.save(contact);
  }

  async deleteContact(emp_no: string, contact_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const contact = await this.contactRepository.findOne({
      where: { contact_id, emp_no },
    });
    if (!contact) {
      throw new NotFoundException(
        `Contact ${contact_id} for ${emp_no} not found`,
      );
    }
    console.log('Deleting contact entity:', contact);
    await this.contactRepository.remove(contact);
  }

  private async validateEmployeeExists(emp_no: string): Promise<void> {
    const emp = await this.employeeRepository.findOne({ where: { emp_no } });
    if (!emp) throw new NotFoundException(`Employee ${emp_no} not found`);
  }
}
