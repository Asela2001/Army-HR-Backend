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
import { Service } from 'src/entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Health } from 'src/entities/health.entity';
import { UpdateHealthDto } from './dto/update-health.dto';
import { CreateHealthDto } from './dto/create-health.dto';
import { Promotion } from 'src/entities/promotion.entity';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Posting } from 'src/entities/posting.entity';
import { UpdatePostingDto } from './dto/update-posting.dto';
import { CreatePostingDto } from './dto/create-posting.dto';
import { Payment } from 'src/entities/payment.entity';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { MedicalHistory } from 'src/entities/medical-history.entity';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { Security } from 'src/entities/security.entity';
import { UpdateSecurityDto } from './dto/update-security.dto';
import { CreateSecurityDto } from './dto/create-security.dto';
import { UpdateEmpMissionDto } from './dto/update-emp-mission.dto';
import { EmpMission } from 'src/entities/emp-mission.entity';
import { CreateEmpMissionDto } from './dto/create-emp-mission.dto';
import { EmpAward } from 'src/entities/emp-award.entity';
import { UpdateEmpAwardDto } from './dto/update-emp-award.dto';
import { CreateEmpAwardDto } from './dto/create-emp-award.dto';
import { UpdateEmpMedicalDto } from './dto/update-emp-medical.dto';
import { CreateEmpMedicalDto } from './dto/create-emp-medical.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Family)
    private familyRepository: Repository<Family>,
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
    @InjectRepository(Service) private serviceRepository: Repository<Service>,
    @InjectRepository(Health) private healthRepository: Repository<Health>,
    @InjectRepository(Promotion)
    private promotionRepository: Repository<Promotion>,
    @InjectRepository(Posting) private postingRepository: Repository<Posting>,
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    @InjectRepository(MedicalHistory)
    private medicalHistoryRepository: Repository<MedicalHistory>,
    @InjectRepository(Security)
    private securityRepository: Repository<Security>,
    @InjectRepository(EmpAward)
    private empAwardRepository: Repository<EmpAward>,
    @InjectRepository(EmpMission)
    private empMissionRepository: Repository<EmpMission>,
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


  // for service records
  async findAllServices(emp_no: string): Promise<Service[]> {
    await this.validateEmployeeExists(emp_no);
    return this.serviceRepository.find({
      where: { emp_no },
      relations: ['employee', 'regiment', 'unit', 'rank'],
    });
  }

  async findOneService(emp_no: string, service_id: string): Promise<Service> {
    await this.validateEmployeeExists(emp_no);
    const service = await this.serviceRepository.findOne({
      where: { service_id, emp_no },
      relations: ['employee', 'regiment', 'unit', 'rank'],
    });
    if (!service) {
      throw new NotFoundException(
        `Service record ${service_id} for ${emp_no} not found`,
      );
    }
    return service;
  }

  async createService(emp_no: string, dto: CreateServiceDto): Promise<Service> {
    await this.validateEmployeeExists(emp_no);
    console.log('Received Service DTO:', dto);
    const service = this.serviceRepository.create({
      service_id: dto.service_id,
      service_no: dto.service_no,
      emp_no: dto.emp_no,
      regiment_id: dto.regiment_id,
      unit_id: dto.unit_id,
      rank_id: dto.rank_id,
    });
    console.log('Created service entity:', service);
    return this.serviceRepository.save(service);
  }

  async updateService(
    emp_no: string,
    service_id: string,
    dto: UpdateServiceDto,
  ): Promise<Service> {
    await this.validateEmployeeExists(emp_no);
    const service = await this.serviceRepository.findOne({
      where: { service_id, emp_no },
    });
    if (!service) {
      throw new NotFoundException(
        `Service record ${service_id} for ${emp_no} not found`,
      );
    }
    console.log('Received Update Service DTO:', dto);
    Object.assign(service, {
      service_no: dto.service_no ?? service.service_no,
      regiment_id: dto.regiment_id ?? service.regiment_id,
      unit_id: dto.unit_id ?? service.unit_id,
      rank_id: dto.rank_id ?? service.rank_id,
    });
    console.log('Updated service entity:', service);
    return this.serviceRepository.save(service);
  }

  async deleteService(emp_no: string, service_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const service = await this.serviceRepository.findOne({
      where: { service_id, emp_no },
    });
    if (!service) {
      throw new NotFoundException(
        `Service record ${service_id} for ${emp_no} not found`,
      );
    }
    console.log('Deleting service entity:', service);
    await this.serviceRepository.remove(service);
  }

  // Employee helth records
  async findAllHealth(emp_no: string): Promise<Health[]> {
    await this.validateEmployeeExists(emp_no);
    return this.healthRepository.find({
      where: { emp_no },
      relations: ['employee', 'fitness'],
    });
  }
  async findOneHealth(emp_no: string, health_id: string): Promise<Health> {
    await this.validateEmployeeExists(emp_no);
    const health = await this.healthRepository.findOne({
      where: { health_id, emp_no },
      relations: ['employee', 'fitness'],
    });
    if (!health)
      throw new NotFoundException(
        `Health ${health_id} for ${emp_no} not found`,
      );
    return health;
  }
  async createHealth(emp_no: string, dto: CreateHealthDto): Promise<Health> {
    await this.validateEmployeeExists(emp_no);
    const health = this.healthRepository.create({ ...dto, emp_no });
    return this.healthRepository.save(health);
  }
  async updateHealth(
    emp_no: string,
    health_id: string,
    dto: UpdateHealthDto,
  ): Promise<Health> {
    await this.validateEmployeeExists(emp_no);
    const health = await this.findOneHealth(emp_no, health_id);
    Object.assign(health, dto);
    return this.healthRepository.save(health);
  }
  async deleteHealth(emp_no: string, health_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const health = await this.findOneHealth(emp_no, health_id);
    await this.healthRepository.remove(health);
  }

  // Employee promotion records
  async findAllPromotions(emp_no: string): Promise<Promotion[]> {
    await this.validateEmployeeExists(emp_no);
    return this.promotionRepository.find({
      where: { service: { emp_no } },
      relations: ['service', 'rank', 'appointment'],
    });
  }
  async findOnePromotion(
    emp_no: string,
    promotion_id: string,
  ): Promise<Promotion> {
    await this.validateEmployeeExists(emp_no);
    const promotion = await this.promotionRepository.findOne({
      where: { promotion_id, service: { emp_no } },
      relations: ['service', 'rank', 'appointment'],
    });
    if (!promotion)
      throw new NotFoundException(
        `Promotion ${promotion_id} for ${emp_no} not found`,
      );
    return promotion;
  }
  async createPromotion(
    emp_no: string,
    dto: CreatePromotionDto,
  ): Promise<Promotion> {
    await this.validateEmployeeExists(emp_no);
    const promotion = this.promotionRepository.create(dto);
    return this.promotionRepository.save(promotion);
  }
  async updatePromotion(
    emp_no: string,
    promotion_id: string,
    dto: UpdatePromotionDto,
  ): Promise<Promotion> {
    await this.validateEmployeeExists(emp_no);
    const promotion = await this.findOnePromotion(emp_no, promotion_id);
    Object.assign(promotion, dto);
    return this.promotionRepository.save(promotion);
  }
  async deletePromotion(emp_no: string, promotion_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const promotion = await this.findOnePromotion(emp_no, promotion_id);
    await this.promotionRepository.remove(promotion);
  }

  // posting records
  async findAllPostings(emp_no: string): Promise<Posting[]> {
    await this.validateEmployeeExists(emp_no);
    return this.postingRepository.find({
      where: { service: { emp_no } },
      relations: ['service', 'unit', 'rank', 'regiment', 'appointment'],
    });
  }
  async findOnePosting(emp_no: string, posting_id: string): Promise<Posting> {
    await this.validateEmployeeExists(emp_no);
    const posting = await this.postingRepository.findOne({
      where: { posting_id, service: { emp_no } },
      relations: ['service', 'unit', 'rank', 'regiment', 'appointment'],
    });
    if (!posting)
      throw new NotFoundException(
        `Posting ${posting_id} for ${emp_no} not found`,
      );
    return posting;
  }
  async createPosting(emp_no: string, dto: CreatePostingDto): Promise<Posting> {
    await this.validateEmployeeExists(emp_no);
    const posting = this.postingRepository.create(dto);
    return this.postingRepository.save(posting);
  }
  async updatePosting(
    emp_no: string,
    posting_id: string,
    dto: UpdatePostingDto,
  ): Promise<Posting> {
    await this.validateEmployeeExists(emp_no);
    const posting = await this.findOnePosting(emp_no, posting_id);
    Object.assign(posting, dto);
    return this.postingRepository.save(posting);
  }
  async deletePosting(emp_no: string, posting_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const posting = await this.findOnePosting(emp_no, posting_id);
    await this.postingRepository.remove(posting);
  }

  // Payment methods
  async findAllPayments(emp_no: string): Promise<Payment[]> {
    await this.validateEmployeeExists(emp_no);
    return this.paymentRepository.find({
      where: { emp_no },
      relations: ['employee', 'allowance', 'loan'],
    });
  }
  async findOnePayment(emp_no: string, payment_id: string): Promise<Payment> {
    await this.validateEmployeeExists(emp_no);
    const payment = await this.paymentRepository.findOne({
      where: { payment_id, emp_no },
      relations: ['employee', 'allowance', 'loan'],
    });
    if (!payment)
      throw new NotFoundException(
        `Payment ${payment_id} for ${emp_no} not found`,
      );
    return payment;
  }

  async createPayment(emp_no: string, dto: CreatePaymentDto): Promise<Payment> {
    await this.validateEmployeeExists(emp_no);
    const payment = this.paymentRepository.create({ ...dto, emp_no });
    return this.paymentRepository.save(payment);
  }

  async updatePayment(
    emp_no: string,
    payment_id: string,
    dto: UpdatePaymentDto,
  ): Promise<Payment> {
    await this.validateEmployeeExists(emp_no);
    const payment = await this.findOnePayment(emp_no, payment_id);
    Object.assign(payment, dto);
    return this.paymentRepository.save(payment);
  }

  async deletePayment(emp_no: string, payment_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const payment = await this.findOnePayment(emp_no, payment_id);
    await this.paymentRepository.remove(payment);
  }

  // Medical History methods
  async findAllMedicalHistories(emp_no: string): Promise<MedicalHistory[]> {
    await this.validateEmployeeExists(emp_no);
    return this.medicalHistoryRepository.find({
      where: { health: { emp_no } },
      relations: ['health'],
    });
  }
  async findOneMedicalHistory(
    emp_no: string,
    mh_id: string,
  ): Promise<MedicalHistory> {
    await this.validateEmployeeExists(emp_no);
    const medicalHistory = await this.medicalHistoryRepository.findOne({
      where: { mh_id, health: { emp_no } },
      relations: ['health'],
    });
    if (!medicalHistory)
      throw new NotFoundException(
        `Medical History ${mh_id} for ${emp_no} not found`,
      );
    return medicalHistory;
  }
  async createMedicalHistory(
    emp_no: string,
    dto: CreateMedicalHistoryDto,
  ): Promise<MedicalHistory> {
    await this.validateEmployeeExists(emp_no);
    const medicalHistory = this.medicalHistoryRepository.create(dto);
    return this.medicalHistoryRepository.save(medicalHistory);
  }
  async updateMedicalHistory(
    emp_no: string,
    mh_id: string,
    dto: UpdateMedicalHistoryDto,
  ): Promise<MedicalHistory> {
    await this.validateEmployeeExists(emp_no);
    const medicalHistory = await this.findOneMedicalHistory(emp_no, mh_id);
    Object.assign(medicalHistory, dto);
    return this.medicalHistoryRepository.save(medicalHistory);
  }
  async deleteMedicalHistory(emp_no: string, mh_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const medicalHistory = await this.findOneMedicalHistory(emp_no, mh_id);
    await this.medicalHistoryRepository.remove(medicalHistory);
  }

  // Security methods
  async findAllSecurities(emp_no: string): Promise<Security[]> {
    await this.validateEmployeeExists(emp_no);
    return this.securityRepository.find({
      where: { emp_no },
      relations: ['employee', 'security_clearance'],
    });
  }
  async findOneSecurity(
    emp_no: string,
    security_id: string,
  ): Promise<Security> {
    await this.validateEmployeeExists(emp_no);
    const security = await this.securityRepository.findOne({
      where: { security_id, emp_no },
      relations: ['employee', 'security_clearance'],
    });
    if (!security)
      throw new NotFoundException(
        `Security ${security_id} for ${emp_no} not found`,
      );
    return security;
  }
  async createSecurity(
    emp_no: string,
    dto: CreateSecurityDto,
  ): Promise<Security> {
    await this.validateEmployeeExists(emp_no);
    const security = this.securityRepository.create({ ...dto, emp_no });
    return this.securityRepository.save(security);
  }
  async updateSecurity(
    emp_no: string,
    security_id: string,
    dto: UpdateSecurityDto,
  ): Promise<Security> {
    await this.validateEmployeeExists(emp_no);
    const security = await this.findOneSecurity(emp_no, security_id);
    Object.assign(security, dto);
    return this.securityRepository.save(security);
  }
  async deleteSecurity(emp_no: string, security_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const security = await this.findOneSecurity(emp_no, security_id);
    await this.securityRepository.remove(security);
  }

  // EmpMedical methods
  async findAllEmpMedicals(emp_no: string): Promise<EmpMedical[]> {
    await this.validateEmployeeExists(emp_no);
    return this.empMedicalRepository.find({
      where: { emp_no },
      relations: ['employee', 'medical'],
    });
  }
  async findOneEmpMedical(
    emp_no: string,
    medical_id: string,
  ): Promise<EmpMedical> {
    await this.validateEmployeeExists(emp_no);
    const empMedical = await this.empMedicalRepository.findOne({
      where: { emp_no, medical_id },
      relations: ['employee', 'medical'],
    });
    if (!empMedical)
      throw new NotFoundException(
        `EmpMedical ${medical_id} for ${emp_no} not found`,
      );
    return empMedical;
  }
  async createEmpMedical(
    emp_no: string,
    dto: CreateEmpMedicalDto,
  ): Promise<EmpMedical> {
    await this.validateEmployeeExists(emp_no);
    const empMedical = this.empMedicalRepository.create({ ...dto, emp_no });
    return this.empMedicalRepository.save(empMedical);
  }
  async updateEmpMedical(
    emp_no: string,
    medical_id: string,
    dto: UpdateEmpMedicalDto,
  ): Promise<EmpMedical> {
    await this.validateEmployeeExists(emp_no);
    const empMedical = await this.findOneEmpMedical(emp_no, medical_id);
    Object.assign(empMedical, dto);
    return this.empMedicalRepository.save(empMedical);
  }
  async deleteEmpMedical(emp_no: string, medical_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const empMedical = await this.findOneEmpMedical(emp_no, medical_id);
    await this.empMedicalRepository.remove(empMedical);
  }

  // EmpAward methods
  async findAllEmpAwards(emp_no: string): Promise<EmpAward[]> {
    await this.validateEmployeeExists(emp_no);
    return this.empAwardRepository.find({
      where: { emp_no },
      relations: ['employee', 'award'],
    });
  }
  async findOneEmpAward(emp_no: string, award_id: string): Promise<EmpAward> {
    await this.validateEmployeeExists(emp_no);
    const empAward = await this.empAwardRepository.findOne({
      where: { emp_no, award_id },
      relations: ['employee', 'award'],
    });
    if (!empAward)
      throw new NotFoundException(
        `EmpAward ${award_id} for ${emp_no} not found`,
      );
    return empAward;
  }
  async createEmpAward(
    emp_no: string,
    dto: CreateEmpAwardDto,
  ): Promise<EmpAward> {
    await this.validateEmployeeExists(emp_no);
    const empAward = this.empAwardRepository.create({ ...dto, emp_no });
    return this.empAwardRepository.save(empAward);
  }
  async updateEmpAward(
    emp_no: string,
    award_id: string,
    dto: UpdateEmpAwardDto,
  ): Promise<EmpAward> {
    await this.validateEmployeeExists(emp_no);
    const empAward = await this.findOneEmpAward(emp_no, award_id);
    Object.assign(empAward, dto);
    return this.empAwardRepository.save(empAward);
  }
  async deleteEmpAward(emp_no: string, award_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const empAward = await this.findOneEmpAward(emp_no, award_id);
    await this.empAwardRepository.remove(empAward);
  }

  // EmpMission methods
  async findAllEmpMissions(emp_no: string): Promise<EmpMission[]> {
    await this.validateEmployeeExists(emp_no);
    return this.empMissionRepository.find({
      where: { emp_no },
      relations: ['employee', 'mission'],
    });
  }
  async findOneEmpMission(
    emp_no: string,
    mission_id: string,
  ): Promise<EmpMission> {
    await this.validateEmployeeExists(emp_no);
    const empMission = await this.empMissionRepository.findOne({
      where: { emp_no, mission_id },
      relations: ['employee', 'mission'],
    });
    if (!empMission)
      throw new NotFoundException(
        `EmpMission ${mission_id} for ${emp_no} not found`,
      );
    return empMission;
  }
  async createEmpMission(
    emp_no: string,
    dto: CreateEmpMissionDto,
  ): Promise<EmpMission> {
    await this.validateEmployeeExists(emp_no);
    const empMission = this.empMissionRepository.create({ ...dto, emp_no });
    return this.empMissionRepository.save(empMission);
  }
  async updateEmpMission(
    emp_no: string,
    mission_id: string,
    dto: UpdateEmpMissionDto,
  ): Promise<EmpMission> {
    await this.validateEmployeeExists(emp_no);
    const empMission = await this.findOneEmpMission(emp_no, mission_id);
    Object.assign(empMission, dto);
    return this.empMissionRepository.save(empMission);
  }
  async deleteEmpMission(emp_no: string, mission_id: string): Promise<void> {
    await this.validateEmployeeExists(emp_no);
    const empMission = await this.findOneEmpMission(emp_no, mission_id);
    await this.empMissionRepository.remove(empMission);
  }

  private async validateEmployeeExists(emp_no: string): Promise<void> {
    const emp = await this.employeeRepository.findOne({ where: { emp_no } });
    if (!emp) throw new NotFoundException(`Employee ${emp_no} not found`);
  }
}
