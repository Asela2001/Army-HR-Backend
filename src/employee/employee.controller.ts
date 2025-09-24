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
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePostingDto } from './dto/update-posting.dto';
import { CreatePostingDto } from './dto/create-posting.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateEmpMissionDto } from './dto/update-emp-mission.dto';
import { CreateEmpMissionDto } from './dto/create-emp-mission.dto';
import { UpdateEmpAwardDto } from './dto/update-emp-award.dto';
import { CreateEmpAwardDto } from './dto/create-emp-award.dto';
import { CreateEmpMedicalDto } from './dto/create-emp-medical.dto';
import { UpdateEmpMedicalDto } from './dto/update-emp-medical.dto';
import { CreateSecurityDto } from './dto/create-security.dto';
import { UpdateSecurityDto } from './dto/update-security.dto';

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

  // for service records
  @Get(':emp_no/service')
  findAllServices(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllServices(emp_no);
  }

  @Get(':emp_no/service/:service_id')
  findOneService(
    @Param('emp_no') emp_no: string,
    @Param('service_id') service_id: string,
  ) {
    return this.employeeService.findOneService(emp_no, service_id);
  }

  @Post(':emp_no/service')
  createService(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreateServiceDto,
  ) {
    return this.employeeService.createService(emp_no, dto);
  }

  @Patch(':emp_no/service/:service_id')
  updateService(
    @Param('emp_no') emp_no: string,
    @Param('service_id') service_id: string,
    @Body() dto: UpdateServiceDto,
  ) {
    return this.employeeService.updateService(emp_no, service_id, dto);
  }

  @Delete(':emp_no/service/:service_id')
  deleteService(
    @Param('emp_no') emp_no: string,
    @Param('service_id') service_id: string,
  ) {
    return this.employeeService.deleteService(emp_no, service_id);
  }

  // for Helth records
  @Get(':emp_no/health')
  findAllHealth(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllHealth(emp_no);
  }

  @Get(':emp_no/health/:health_id')
  findOneHealth(
    @Param('emp_no') emp_no: string,
    @Param('health_id') health_id: string,
  ) {
    return this.employeeService.findOneHealth(emp_no, health_id);
  }

  @Post(':emp_no/health')
  createHealth(@Param('emp_no') emp_no: string, @Body() dto: CreateHealthDto) {
    return this.employeeService.createHealth(emp_no, dto);
  }

  @Patch(':emp_no/health/:health_id')
  updateHealth(
    @Param('emp_no') emp_no: string,
    @Param('health_id') health_id: string,
    @Body() dto: UpdateHealthDto,
  ) {
    return this.employeeService.updateHealth(emp_no, health_id, dto);
  }

  @Delete(':emp_no/health/:health_id')
  deleteHealth(
    @Param('emp_no') emp_no: string,
    @Param('health_id') health_id: string,
  ) {
    return this.employeeService.deleteHealth(emp_no, health_id);
  }

  // promotion records
  @Get(':emp_no/promotion')
  findAllPromotions(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllPromotions(emp_no);
  }
  @Get(':emp_no/promotion/:promotion_id')
  findOnePromotion(
    @Param('emp_no') emp_no: string,
    @Param('promotion_id') promotion_id: string,
  ) {
    return this.employeeService.findOnePromotion(emp_no, promotion_id);
  }
  @Post(':emp_no/promotion')
  createPromotion(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreatePromotionDto,
  ) {
    return this.employeeService.createPromotion(emp_no, dto);
  }
  @Patch(':emp_no/promotion/:promotion_id')
  updatePromotion(
    @Param('emp_no') emp_no: string,
    @Param('promotion_id') promotion_id: string,
    @Body() dto: UpdatePromotionDto,
  ) {
    return this.employeeService.updatePromotion(emp_no, promotion_id, dto);
  }
  @Delete(':emp_no/promotion/:promotion_id')
  deletePromotion(
    @Param('emp_no') emp_no: string,
    @Param('promotion_id') promotion_id: string,
  ) {
    return this.employeeService.deletePromotion(emp_no, promotion_id);
  }

  // Posting records can be accessed from Service entity
  @Get(':emp_no/posting')
  findAllPostings(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllPostings(emp_no);
  }
  @Get(':emp_no/posting/:posting_id')
  findOnePosting(
    @Param('emp_no') emp_no: string,
    @Param('posting_id') posting_id: string,
  ) {
    return this.employeeService.findOnePosting(emp_no, posting_id);
  }
  @Post(':emp_no/posting')
  createPosting(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreatePostingDto,
  ) {
    return this.employeeService.createPosting(emp_no, dto);
  }
  @Patch(':emp_no/posting/:posting_id')
  updatePosting(
    @Param('emp_no') emp_no: string,
    @Param('posting_id') posting_id: string,
    @Body() dto: UpdatePostingDto,
  ) {
    return this.employeeService.updatePosting(emp_no, posting_id, dto);
  }
  @Delete(':emp_no/posting/:posting_id')
  deletePosting(
    @Param('emp_no') emp_no: string,
    @Param('posting_id') posting_id: string,
  ) {
    return this.employeeService.deletePosting(emp_no, posting_id);
  }

  // Payment endpoints
  @Get(':emp_no/payment')
  findAllPayments(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllPayments(emp_no);
  }
  @Get(':emp_no/payment/:payment_id')
  findOnePayment(
    @Param('emp_no') emp_no: string,
    @Param('payment_id') payment_id: string,
  ) {
    return this.employeeService.findOnePayment(emp_no, payment_id);
  }
  @Post(':emp_no/payment')
  createPayment(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreatePaymentDto,
  ) {
    return this.employeeService.createPayment(emp_no, dto);
  }
  @Patch(':emp_no/payment/:payment_id')
  updatePayment(
    @Param('emp_no') emp_no: string,
    @Param('payment_id') payment_id: string,
    @Body() dto: UpdatePaymentDto,
  ) {
    return this.employeeService.updatePayment(emp_no, payment_id, dto);
  }
  @Delete(':emp_no/payment/:payment_id')
  deletePayment(
    @Param('emp_no') emp_no: string,
    @Param('payment_id') payment_id: string,
  ) {
    return this.employeeService.deletePayment(emp_no, payment_id);
  }

  // medicle history
  @Get(':emp_no/medical-history')
  findAllMedicalHistories(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllMedicalHistories(emp_no);
  }
  @Get(':emp_no/medical-history/:mh_id')
  findOneMedicalHistory(
    @Param('emp_no') emp_no: string,
    @Param('mh_id') mh_id: string,
  ) {
    return this.employeeService.findOneMedicalHistory(emp_no, mh_id);
  }
  @Post(':emp_no/medical-history')
  createMedicalHistory(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreateMedicalHistoryDto,
  ) {
    return this.employeeService.createMedicalHistory(emp_no, dto);
  }
  @Patch(':emp_no/medical-history/:mh_id')
  updateMedicalHistory(
    @Param('emp_no') emp_no: string,
    @Param('mh_id') mh_id: string,
    @Body() dto: UpdateMedicalHistoryDto,
  ) {
    return this.employeeService.updateMedicalHistory(emp_no, mh_id, dto);
  }
  @Delete(':emp_no/medical-history/:mh_id')
  deleteMedicalHistory(
    @Param('emp_no') emp_no: string,
    @Param('mh_id') mh_id: string,
  ) {
    return this.employeeService.deleteMedicalHistory(emp_no, mh_id);
  }

  // Security details
  @Get(':emp_no/security')
  findAllSecurities(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllSecurities(emp_no);
  }
  @Get(':emp_no/security/:security_id')
  findOneSecurity(
    @Param('emp_no') emp_no: string,
    @Param('security_id') security_id: string,
  ) {
    return this.employeeService.findOneSecurity(emp_no, security_id);
  }
  @Post(':emp_no/security')
  createSecurity(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreateSecurityDto,
  ) {
    return this.employeeService.createSecurity(emp_no, dto);
  }
  @Patch(':emp_no/security/:security_id')
  updateSecurity(
    @Param('emp_no') emp_no: string,
    @Param('security_id') security_id: string,
    @Body() dto: UpdateSecurityDto,
  ) {
    return this.employeeService.updateSecurity(emp_no, security_id, dto);
  }
  @Delete(':emp_no/security/:security_id')
  deleteSecurity(
    @Param('emp_no') emp_no: string,
    @Param('security_id') security_id: string,
  ) {
    return this.employeeService.deleteSecurity(emp_no, security_id);
  }

  // EmpMedical endpoints
  @Get(':emp_no/emp-medical')
  findAllEmpMedicals(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllEmpMedicals(emp_no);
  }
  @Get(':emp_no/emp-medical/:medical_id')
  findOneEmpMedical(
    @Param('emp_no') emp_no: string,
    @Param('medical_id') medical_id: string,
  ) {
    return this.employeeService.findOneEmpMedical(emp_no, medical_id);
  }
  @Post(':emp_no/emp-medical')
  createEmpMedical(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreateEmpMedicalDto,
  ) {
    return this.employeeService.createEmpMedical(emp_no, dto);
  }
  @Patch(':emp_no/emp-medical/:medical_id')
  updateEmpMedical(
    @Param('emp_no') emp_no: string,
    @Param('medical_id') medical_id: string,
    @Body() dto: UpdateEmpMedicalDto,
  ) {
    return this.employeeService.updateEmpMedical(emp_no, medical_id, dto);
  }
  @Delete(':emp_no/emp-medical/:medical_id')
  deleteEmpMedical(
    @Param('emp_no') emp_no: string,
    @Param('medical_id') medical_id: string,
  ) {
    return this.employeeService.deleteEmpMedical(emp_no, medical_id);
  }

  // EmpAward endpoints
  @Get(':emp_no/emp-award')
  findAllEmpAwards(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllEmpAwards(emp_no);
  }
  @Get(':emp_no/emp-award/:award_id')
  findOneEmpAward(
    @Param('emp_no') emp_no: string,
    @Param('award_id') award_id: string,
  ) {
    return this.employeeService.findOneEmpAward(emp_no, award_id);
  }
  @Post(':emp_no/emp-award')
  createEmpAward(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreateEmpAwardDto,
  ) {
    return this.employeeService.createEmpAward(emp_no, dto);
  }
  @Patch(':emp_no/emp-award/:award_id')
  updateEmpAward(
    @Param('emp_no') emp_no: string,
    @Param('award_id') award_id: string,
    @Body() dto: UpdateEmpAwardDto,
  ) {
    return this.employeeService.updateEmpAward(emp_no, award_id, dto);
  }
  @Delete(':emp_no/emp-award/:award_id')
  deleteEmpAward(
    @Param('emp_no') emp_no: string,
    @Param('award_id') award_id: string,
  ) {
    return this.employeeService.deleteEmpAward(emp_no, award_id);
  }

  // EmpMission endpoints
  @Get(':emp_no/emp-mission')
  findAllEmpMissions(@Param('emp_no') emp_no: string) {
    return this.employeeService.findAllEmpMissions(emp_no);
  }
  @Get(':emp_no/emp-mission/:mission_id')
  findOneEmpMission(
    @Param('emp_no') emp_no: string,
    @Param('mission_id') mission_id: string,
  ) {
    return this.employeeService.findOneEmpMission(emp_no, mission_id);
  }
  @Post(':emp_no/emp-mission')
  createEmpMission(
    @Param('emp_no') emp_no: string,
    @Body() dto: CreateEmpMissionDto,
  ) {
    return this.employeeService.createEmpMission(emp_no, dto);
  }
  @Patch(':emp_no/emp-mission/:mission_id')
  updateEmpMission(
    @Param('emp_no') emp_no: string,
    @Param('mission_id') mission_id: string,
    @Body() dto: UpdateEmpMissionDto,
  ) {
    return this.employeeService.updateEmpMission(emp_no, mission_id, dto);
  }
  @Delete(':emp_no/emp-mission/:mission_id')
  deleteEmpMission(
    @Param('emp_no') emp_no: string,
    @Param('mission_id') mission_id: string,
  ) {
    return this.employeeService.deleteEmpMission(emp_no, mission_id);
  }
}
