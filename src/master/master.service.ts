import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regiment } from 'src/entities/regiment.entity';
import { Repository } from 'typeorm';
import { CreateRegimentDto } from './dto/create-regiment.dto';
import { UpdateRegimentDto } from './dto/update-regiment.dto';
import { Unit } from 'src/entities/unit.entity';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Rank } from 'src/entities/rank.entity';
import { UpdateRankDto } from './dto/update-rank.dto';
import { CreateRankDto } from './dto/create-rank.dto';
import { Appointment } from 'src/entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Allowance } from 'src/entities/allowance.entity';
import { CreateAllowanceDto } from './dto/create-allowance.dto';
import { UpdateAllowanceDto } from './dto/update-allowance.dto';
import { Loan } from 'src/entities/loan.entity';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Fitness } from 'src/entities/fitness.entity';
import { CreateFitnessDto } from './dto/create-fitness.dto';
import { UpdateFitnessDto } from './dto/update-fitness.dto';
import { SecurityClearance } from 'src/entities/security-clearance.entity';
import { CreateSecurityClearanceDto } from './dto/create-security-clearance.dto';
import { UpdateSecurityClearanceDto } from './dto/update-security-clearance.dto';
import { Medical } from 'src/entities/medical.entity';
import { CreateMedicalDto } from './dto/create-medical.dto';
import { UpdateMedicalDto } from './dto/update-medical.dto';
import { Mission } from 'src/entities/mission.entity';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from 'src/entities/award.entity';
import { CreateAwardDto } from './dto/create-award.dto';

@Injectable()
export class MasterService {
  constructor(
    @InjectRepository(Regiment)
    private regimentRepository: Repository<Regiment>,
    @InjectRepository(Unit)
    private unitRepository: Repository<Unit>,
    @InjectRepository(Rank)
    private rankRepository: Repository<Rank>,
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    @InjectRepository(Allowance)
    private allowanceRepository: Repository<Allowance>,
    @InjectRepository(Loan)
    private loanRepository: Repository<Loan>,
    @InjectRepository(Fitness)
    private fitnessRepository: Repository<Fitness>,
    @InjectRepository(SecurityClearance)
    private securityClearanceRepository: Repository<SecurityClearance>,
    @InjectRepository(Medical)
    private medicalRepository: Repository<Medical>,
    @InjectRepository(Award)
    private awardRepository: Repository<Award>,
    @InjectRepository(Mission)
    private missionRepository: Repository<Mission>,
  ) {}

  // access regiment data
  async findAllRegiments(): Promise<Regiment[]> {
    return this.regimentRepository.find();
  }

  async findOneRegiments(regiment_id: string): Promise<Regiment> {
    const regiment = await this.regimentRepository.findOne({
      where: { regiment_id },
    });
    if (!regiment) {
      throw new NotFoundException(`Regiment ${regiment_id} not found`);
    }
    return regiment;
  }

  async createRegiments(dto: CreateRegimentDto): Promise<Regiment> {
    console.log('Received Regiment DTO:', dto);
    const regiment = this.regimentRepository.create({
      regiment_id: dto.regiment_id,
      name: dto.name,
      location: dto.location,
      address: dto.address,
    });
    console.log('Created regiment entity:', regiment);
    return this.regimentRepository.save(regiment);
  }

  async updateRegiments(
    regiment_id: string,
    dto: UpdateRegimentDto,
  ): Promise<Regiment> {
    const regiment = await this.regimentRepository.findOne({
      where: { regiment_id },
    });
    if (!regiment) {
      throw new NotFoundException(`Regiment ${regiment_id} not found`);
    }
    console.log('Received Update Regiment DTO:', dto);
    Object.assign(regiment, {
      name: dto.name ?? regiment.name,
      location: dto.location ?? regiment.location,
      address: dto.address ?? regiment.address,
    });
    console.log('Updated regiment entity:', regiment);
    return this.regimentRepository.save(regiment);
  }

  async deleteRegiments(regiment_id: string): Promise<void> {
    const regiment = await this.regimentRepository.findOne({
      where: { regiment_id },
    });
    if (!regiment) {
      throw new NotFoundException(`Regiment ${regiment_id} not found`);
    }
    console.log('Deleting regiment entity:', regiment);
    await this.regimentRepository.remove(regiment);
  }

  // access unit data
  async findAllUnit(): Promise<Unit[]> {
    return this.unitRepository.find();
  }

  async findOneUnit(unit_id: string): Promise<Unit> {
    const unit = await this.unitRepository.findOne({
      where: { unit_id },
    });
    if (!unit) {
      throw new NotFoundException(`Unit ${unit_id} not found`);
    }
    return unit;
  }

  async createUnit(dto: CreateUnitDto): Promise<Unit> {
    console.log('Received Unit DTO:', dto);
    const unit = this.unitRepository.create({
      unit_id: dto.unit_id,
      name: dto.name,
      location: dto.location,
      address: dto.address,
    });
    console.log('Created unit entity:', unit);
    return this.unitRepository.save(unit);
  }

  async updateUnit(unit_id: string, dto: UpdateUnitDto): Promise<Unit> {
    const unit = await this.unitRepository.findOne({
      where: { unit_id },
    });
    if (!unit) {
      throw new NotFoundException(`Unit ${unit_id} not found`);
    }
    console.log('Received Update Unit DTO:', dto);
    Object.assign(unit, {
      name: dto.name,
      location: dto.location,
      address: dto.address,
    });
    console.log('Updated unit entity:', unit);
    return this.unitRepository.save(unit);
  }

  async deleteUnit(unit_id: string): Promise<void> {
    const unit = await this.unitRepository.findOne({
      where: { unit_id },
    });
    if (!unit) {
      throw new NotFoundException(`Unit ${unit_id} not found`);
    }
    console.log('Deleting unit entity:', unit);
    await this.unitRepository.remove(unit);
  }

  // access rank data
  async findAllRanks(): Promise<Rank[]> {
    return this.rankRepository.find();
  }

  async findOneRank(rank_id: string): Promise<Rank> {
    const rank = await this.rankRepository.findOne({
      where: { rank_id },
    });
    if (!rank) {
      throw new NotFoundException(`Rank ${rank_id} not found`);
    }
    return rank;
  }

  async createRank(dto: CreateRankDto): Promise<Rank> {
    console.log('Received Rank DTO:', dto);
    const rank = this.rankRepository.create({
      rank_id: dto.rank_id,
      r_name: dto.r_name,
      r_level: dto.r_level,
    });
    console.log('Created rank entity:', rank);
    return this.rankRepository.save(rank);
  }

  async updateRank(rank_id: string, dto: UpdateRankDto): Promise<Rank> {
    const rank = await this.rankRepository.findOne({
      where: { rank_id },
    });
    if (!rank) {
      throw new NotFoundException(`Rank ${rank_id} not found`);
    }
    console.log('Received Update Rank DTO:', dto);
    Object.assign(rank, {
      r_name: dto.r_name ?? rank.r_name,
      r_level: dto.r_level ?? rank.r_level,
    });
    console.log('Updated rank entity:', rank);
    return this.rankRepository.save(rank);
  }

  async deleteRank(rank_id: string): Promise<void> {
    const rank = await this.rankRepository.findOne({
      where: { rank_id },
    });
    if (!rank) {
      throw new NotFoundException(`Rank ${rank_id} not found`);
    }
    console.log('Deleting rank entity:', rank);
    await this.rankRepository.remove(rank);
  }

  // Appointment methods
  async findAllAppointments(): Promise<Appointment[]> {
    return this.appointmentRepository.find();
  }
  async findOneAppointment(appointment_id: string): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { appointment_id },
    });
    if (!appointment)
      throw new NotFoundException(`Appointment ${appointment_id} not found`);
    return appointment;
  }

  async createAppointment(dto: CreateAppointmentDto): Promise<Appointment> {
    console.log('Received Appointment DTO:', dto);
    const appointment = this.appointmentRepository.create({
      appointment_id: dto.appointment_id,
      name: dto.name,
      location: dto.location,
    });
    console.log('Created appointment entity:', appointment);
    return this.appointmentRepository.save(appointment);
  }

  async updateAppointment(
    appointment_id: string,
    dto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { appointment_id },
    });
    if (!appointment) {
      throw new NotFoundException(`Appointment ${appointment_id} not found`);
    }
    console.log('Received Update Appointment DTO:', dto);
    Object.assign(appointment, {
      name: dto.name ?? appointment.name,
      location: dto.location ?? appointment.location,
    });
    console.log('Updated appointment entity:', appointment);
    return this.appointmentRepository.save(appointment);
  }

  async deleteAppointment(appointment_id: string): Promise<void> {
    const appointment = await this.appointmentRepository.findOne({
      where: { appointment_id },
    });
    if (!appointment) {
      throw new NotFoundException(`Appointment ${appointment_id} not found`);
    }
    console.log('Deleting appointment entity:', appointment);
    await this.appointmentRepository.remove(appointment);
  }

  // Allowance methods
  async findAllAllowances(): Promise<Allowance[]> {
    return this.allowanceRepository.find();
  }

  async findOneAllowance(allowance_id: string): Promise<Allowance> {
    const allowance = await this.allowanceRepository.findOne({
      where: { allowance_id },
    });
    if (!allowance) {
      throw new NotFoundException(`Allowance ${allowance_id} not found`);
    }
    return allowance;
  }

  async createAllowance(dto: CreateAllowanceDto): Promise<Allowance> {
    console.log('Received Allowance DTO:', dto);
    const allowance = this.allowanceRepository.create({
      allowance_id: dto.allowance_id,
      name: dto.name,
      amount: dto.amount,
      reason: dto.reason,
    });
    console.log('Created allowance entity:', allowance);
    return this.allowanceRepository.save(allowance);
  }

  async updateAllowance(
    allowance_id: string,
    dto: UpdateAllowanceDto,
  ): Promise<Allowance> {
    const allowance = await this.allowanceRepository.findOne({
      where: { allowance_id },
    });
    if (!allowance) {
      throw new NotFoundException(`Allowance ${allowance_id} not found`);
    }
    console.log('Received Update Allowance DTO:', dto);
    Object.assign(allowance, {
      name: dto.name ?? allowance.name,
      amount: dto.amount ?? allowance.amount,
      reason: dto.reason ?? allowance.reason,
    });
    console.log('Updated allowance entity:', allowance);
    return this.allowanceRepository.save(allowance);
  }

  async deleteAllowance(allowance_id: string): Promise<void> {
    const allowance = await this.allowanceRepository.findOne({
      where: { allowance_id },
    });
    if (!allowance) {
      throw new NotFoundException(`Allowance ${allowance_id} not found`);
    }
    console.log('Deleting allowance entity:', allowance);
    await this.allowanceRepository.remove(allowance);
  }

  // loan table
  async findAllLoans(): Promise<Loan[]> {
    return this.loanRepository.find();
  }

  async findOneLoan(loan_id: string): Promise<Loan> {
    const loan = await this.loanRepository.findOne({
      where: { loan_id },
    });
    if (!loan) {
      throw new NotFoundException(`Loan ${loan_id} not found`);
    }
    return loan;
  }

  async createLoan(dto: CreateLoanDto): Promise<Loan> {
    const loan = this.loanRepository.create({
      loan_id: dto.loan_id,
      l_name: dto.l_name,
      amount: dto.amount,
      duration: dto.duration,
    });
    console.log('Created loan entity:', loan);
    return this.loanRepository.save(loan);
  }

  async updateLoan(loan_id: string, dto: UpdateLoanDto): Promise<Loan> {
    const loan = await this.loanRepository.findOne({
      where: { loan_id },
    });
    if (!loan) {
      throw new NotFoundException(`Loan ${loan_id} not found`);
    }
    console.log('Received Update Loan DTO:', dto);
    Object.assign(loan, {
      l_name: dto.l_name ?? loan.l_name,
      amount: dto.amount ?? loan.amount,
      duration: dto.duration ?? loan.duration,
    });
    console.log('Updated loan entity:', loan);
    return this.loanRepository.save(loan);
  }

  async deleteLoan(loan_id: string): Promise<void> {
    const loan = await this.loanRepository.findOne({
      where: { loan_id },
    });
    if (!loan) {
      throw new NotFoundException(`Loan ${loan_id} not found`);
    }
    console.log('Deleting loan entity:', loan);
    await this.loanRepository.remove(loan);
  }

  // fitness table methods can be added here
  async findAllFitness(): Promise<Fitness[]> {
    return this.fitnessRepository.find();
  }

  async findOneFitness(fitness_id: string): Promise<Fitness> {
    const fitness = await this.fitnessRepository.findOne({
      where: { fitness_id },
    });
    if (!fitness) {
      throw new NotFoundException(`Fitness ${fitness_id} not found`);
    }
    return fitness;
  }

  async createFitness(dto: CreateFitnessDto): Promise<Fitness> {
    const fitness = this.fitnessRepository.create({
      fitness_id: dto.fitness_id,
      f_name: dto.f_name,
      f_category: dto.f_category,
      f_level: dto.f_level,
    });
    return this.fitnessRepository.save(fitness);
  }

  async updateFitness(
    fitness_id: string,
    dto: UpdateFitnessDto,
  ): Promise<Fitness> {
    const fitness = await this.fitnessRepository.findOne({
      where: { fitness_id },
    });
    if (!fitness) {
      throw new NotFoundException(`Fitness ${fitness_id} not found`);
    }
    Object.assign(fitness, {
      f_name: dto.f_name ?? fitness.f_name,
      f_category: dto.f_category ?? fitness.f_category,
      f_level: dto.f_level ?? fitness.f_level,
    });
    return this.fitnessRepository.save(fitness);
  }

  async deleteFitness(fitness_id: string): Promise<void> {
    const fitness = await this.fitnessRepository.findOne({
      where: { fitness_id },
    });
    if (!fitness) {
      throw new NotFoundException(`Fitness ${fitness_id} not found`);
    }
    await this.fitnessRepository.remove(fitness);
  }

  // security clearance methods
  async findAllSecurityClearances(): Promise<SecurityClearance[]> {
    return this.securityClearanceRepository.find();
  }

  async findOneSecurityClearance(
    clearance_id: string,
  ): Promise<SecurityClearance> {
    const clearance = await this.securityClearanceRepository.findOne({
      where: { clearance_id },
    });
    if (!clearance) {
      throw new NotFoundException(
        `Security Clearance ${clearance_id} not found`,
      );
    }
    return clearance;
  }

  async createSecurityClearance(
    dto: CreateSecurityClearanceDto,
  ): Promise<SecurityClearance> {
    const clearance = this.securityClearanceRepository.create({
      clearance_id: dto.clearance_id,
      sc_level: dto.sc_level,
      expire_date: dto.expire_date,
    });
    return this.securityClearanceRepository.save(clearance);
  }

  async updateSecurityClearance(
    clearance_id: string,
    dto: UpdateSecurityClearanceDto,
  ): Promise<SecurityClearance> {
    const clearance = await this.securityClearanceRepository.findOne({
      where: { clearance_id },
    });
    if (!clearance) {
      throw new NotFoundException(
        `Security Clearance ${clearance_id} not found`,
      );
    }
    Object.assign(clearance, {
      sc_level: dto.sc_level ?? clearance.sc_level,
      expire_date: dto.expire_date ?? clearance.expire_date,
    });
    return this.securityClearanceRepository.save(clearance);
  }

  async deleteSecurityClearance(clearance_id: string): Promise<void> {
    const clearance = await this.securityClearanceRepository.findOne({
      where: { clearance_id },
    });
    if (!clearance) {
      throw new NotFoundException(
        `Security Clearance ${clearance_id} not found`,
      );
    }
    await this.securityClearanceRepository.remove(clearance);
  }

  // Medical methods
  async findAllMedicals(): Promise<Medical[]> {
    return this.medicalRepository.find();
  }
  async findOneMedical(medical_id: string): Promise<Medical> {
    const medical = await this.medicalRepository.findOne({
      where: { medical_id },
    });
    if (!medical)
      throw new NotFoundException(`Medical ${medical_id} not found`);
    return medical;
  }
  async createMedical(dto: CreateMedicalDto): Promise<Medical> {
    const medical = this.medicalRepository.create({
      medical_id: dto.medical_id,
      name: dto.name,
      type: dto.type,
      valid_duration: dto.valid_duration,
    });
    return this.medicalRepository.save(medical);
  }
  async updateMedical(
    medical_id: string,
    dto: UpdateMedicalDto,
  ): Promise<Medical> {
    const medical = await this.findOneMedical(medical_id);
    Object.assign(medical, {
      name: dto.name ?? medical.name,
      type: dto.type ?? medical.type,
      valid_duration: dto.valid_duration ?? medical.valid_duration,
    });
    return this.medicalRepository.save(medical);
  }
  async deleteMedical(medical_id: string): Promise<void> {
    const medical = await this.findOneMedical(medical_id);
    await this.medicalRepository.remove(medical);
  }

  async findAllAwards(): Promise<Award[]> {
    return this.awardRepository.find();
  }
  async findOneAward(award_id: string): Promise<Award> {
    const award = await this.awardRepository.findOne({ where: { award_id } });
    if (!award) throw new NotFoundException(`Award ${award_id} not found`);
    return award;
  }
  async createAward(dto: CreateAwardDto): Promise<Award> {
    const award = this.awardRepository.create(dto);
    return this.awardRepository.save(award);
  }
  async updateAward(award_id: string, dto: UpdateAwardDto): Promise<Award> {
    const award = await this.findOneAward(award_id);
    Object.assign(award, dto);
    return this.awardRepository.save(award);
  }
  async deleteAward(award_id: string): Promise<void> {
    const award = await this.findOneAward(award_id);
    await this.awardRepository.remove(award);
  }

  // Mission methods
  async findAllMissions(): Promise<Mission[]> {
    return this.missionRepository.find();
  }
  async findOneMission(mission_id: string): Promise<Mission> {
    const mission = await this.missionRepository.findOne({
      where: { mission_id },
    });
    if (!mission)
      throw new NotFoundException(`Mission ${mission_id} not found`);
    return mission;
  }
  async createMission(dto: CreateMissionDto): Promise<Mission> {
    const mission = this.missionRepository.create({
      mission_id: dto.mission_id,
      name: dto.name,
      location: dto.location,
      type: dto.type,
    });
    return this.missionRepository.save(mission);
  }
  async updateMission(
    mission_id: string,
    dto: UpdateMissionDto,
  ): Promise<Mission> {
    const mission = await this.findOneMission(mission_id);
    Object.assign(mission, {
      name: dto.name ?? mission.name,
      location: dto.location ?? mission.location,
      type: dto.type ?? mission.type,
    });
    return this.missionRepository.save(mission);
  }
  async deleteMission(mission_id: string): Promise<void> {
    const mission = await this.findOneMission(mission_id);
    await this.missionRepository.remove(mission);
  }
}
