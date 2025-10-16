import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { UpdateRegimentDto } from './dto/update-regiment.dto';
import { CreateRegimentDto } from './dto/create-regiment.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { CreateRankDto } from './dto/create-rank.dto';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { UpdateAllowanceDto } from './dto/update-allowance.dto';
import { CreateAllowanceDto } from './dto/create-allowance.dto';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { UpdateFitnessDto } from './dto/update-fitness.dto';
import { CreateFitnessDto } from './dto/create-fitness.dto';
import { UpdateSecurityClearanceDto } from './dto/update-security-clearance.dto';
import { CreateSecurityClearanceDto } from './dto/create-security-clearance.dto';
import { CreateMedicalDto } from './dto/create-medical.dto';
import { UpdateMedicalDto } from './dto/update-medical.dto';
import { CreateAwardDto } from './dto/create-award.dto';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { UpdateAwardDto } from './dto/update-award.dto';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  // regiment endpoints
  @Get('/regiment')
  findAllRegiments() {
    return this.masterService.findAllRegiments();
  }

  @Get('/regiment/:regiment_id')
  findOneRegiments(@Param('regiment_id') regiment_id: string) {
    return this.masterService.findOneRegiments(regiment_id);
  }

  @Post('/regiment')
  createRegiments(@Body() dto: CreateRegimentDto) {
    return this.masterService.createRegiments(dto);
  }

  @Patch('/regiment/:regiment_id')
  updateRegiments(
    @Param('regiment_id') regiment_id: string,
    @Body() dto: UpdateRegimentDto,
  ) {
    return this.masterService.updateRegiments(regiment_id, dto);
  }

  @Delete('/regiment/:regiment_id')
  deleteRegiments(@Param('regiment_id') regiment_id: string) {
    return this.masterService.deleteRegiments(regiment_id);
  }

  // Unit endpoints

  @Get('/unit')
  findAllUnits() {
    return this.masterService.findAllUnit();
  }

  @Get('/unit/:unit_id')
  findOneUnit(@Param('unit_id') unit_id: string) {
    return this.masterService.findOneRegiments(unit_id);
  }

  @Post('/unit')
  createUnit(@Body() dto: CreateUnitDto) {
    return this.masterService.createUnit(dto);
  }

  @Patch('/unit/:unit_id')
  updateUnit(@Param('unit_id') unit_id: string, @Body() dto: UpdateUnitDto) {
    return this.masterService.updateUnit(unit_id, dto);
  }

  @Delete('/unit/:unit_id')
  deleteUnit(@Param('unit_id') unit_id: string) {
    return this.masterService.deleteUnit(unit_id);
  }

  // rank endpoints
  @Get('rank')
  findAllRanks() {
    return this.masterService.findAllRanks();
  }

  @Get('rank/:rank_id')
  findOneRank(@Param('rank_id') rank_id: string) {
    return this.masterService.findOneRank(rank_id);
  }

  @Post('rank')
  createRank(@Body() dto: CreateRankDto) {
    return this.masterService.createRank(dto);
  }

  @Patch('rank/:rank_id')
  updateRank(@Param('rank_id') rank_id: string, @Body() dto: UpdateRankDto) {
    return this.masterService.updateRank(rank_id, dto);
  }

  @Delete('rank/:rank_id')
  deleteRank(@Param('rank_id') rank_id: string) {
    return this.masterService.deleteRank(rank_id);
  }

  // appointment endpoints
  @Get('appointment')
  findAllAppointments() {
    return this.masterService.findAllAppointments();
  }

  @Get('appointment/:appointment_id')
  findOneAppointment(@Param('appointment_id') appointment_id: string) {
    return this.masterService.findOneAppointment(appointment_id);
  }

  @Post('appointment')
  createAppointment(@Body() dto: CreateAppointmentDto) {
    return this.masterService.createAppointment(dto);
  }

  @Patch('appointment/:appointment_id')
  updateAppointment(
    @Param('appointment_id') appointment_id: string,
    @Body() dto: UpdateAppointmentDto,
  ) {
    return this.masterService.updateAppointment(appointment_id, dto);
  }

  @Delete('appointment/:appointment_id')
  deleteAppointment(@Param('appointment_id') appointment_id: string) {
    return this.masterService.deleteAppointment(appointment_id);
  }

  // Allowance endpoints
  @Get('/allowance')
  findAllAllowances() {
    return this.masterService.findAllAllowances();
  }
  @Get('/allowance/:allowance_id')
  findOneAllowance(@Param('allowance_id') allowance_id: string) {
    return this.masterService.findOneAllowance(allowance_id);
  }
  @Post('/allowance')
  createAllowance(@Body() dto: CreateAllowanceDto) {
    return this.masterService.createAllowance(dto);
  }
  @Patch('/allowance/:allowance_id')
  updateAllowance(
    @Param('allowance_id') allowance_id: string,
    @Body() dto: UpdateAllowanceDto,
  ) {
    return this.masterService.updateAllowance(allowance_id, dto);
  }
  @Delete('/allowance/:allowance_id')
  deleteAllowance(@Param('allowance_id') allowance_id: string) {
    return this.masterService.deleteAllowance(allowance_id);
  }

  // Loan endpoints
  @Get('/loan')
  findAllLoans() {
    return this.masterService.findAllLoans();
  }

  @Get('/loan/:loan_id')
  findOneLoan(@Param('loan_id') loan_id: string) {
    return this.masterService.findOneLoan(loan_id);
  }

  @Post('/loan')
  createLoan(@Body() dto: CreateLoanDto) {
    return this.masterService.createLoan(dto);
  }

  @Patch('/loan/:loan_id')
  updateLoan(@Param('loan_id') loan_id: string, @Body() dto: UpdateLoanDto) {
    return this.masterService.updateLoan(loan_id, dto);
  }

  @Delete('/loan/:loan_id')
  deleteLoan(@Param('loan_id') loan_id: string) {
    return this.masterService.deleteLoan(loan_id);
  }

  // Fitness endpoints
  @Get('/fitness')
  findAllFitness() {
    return this.masterService.findAllFitness();
  }
  @Get('/fitness/:fitness_id')
  findOneFitness(@Param('fitness_id') fitness_id: string) {
    return this.masterService.findOneFitness(fitness_id);
  }
  @Post('/fitness')
  createFitness(@Body() dto: CreateFitnessDto) {
    return this.masterService.createFitness(dto);
  }
  @Patch('/fitness/:fitness_id')
  updateFitness(
    @Param('fitness_id') fitness_id: string,
    @Body() dto: UpdateFitnessDto,
  ) {
    return this.masterService.updateFitness(fitness_id, dto);
  }
  @Delete('/fitness/:fitness_id')
  deleteFitness(@Param('fitness_id') fitness_id: string) {
    return this.masterService.deleteFitness(fitness_id);
  }

  @Get('/security-clearance')
  findAllSecurityClearances() {
    return this.masterService.findAllSecurityClearances();
  }
  @Get('/security-clearance/:clearance_id')
  findOneSecurityClearance(@Param('clearance_id') clearance_id: string) {
    return this.masterService.findOneSecurityClearance(clearance_id);
  }
  @Post('/security-clearance')
  createSecurityClearance(@Body() dto: CreateSecurityClearanceDto) {
    return this.masterService.createSecurityClearance(dto);
  }
  @Patch('/security-clearance/:clearance_id')
  updateSecurityClearance(
    @Param('clearance_id') clearance_id: string,
    @Body() dto: UpdateSecurityClearanceDto,
  ) {
    return this.masterService.updateSecurityClearance(clearance_id, dto);
  }
  @Delete('/security-clearance/:clearance_id')
  deleteSecurityClearance(@Param('clearance_id') clearance_id: string) {
    return this.masterService.deleteSecurityClearance(clearance_id);
  }

  // medicle endpoints
  @Get('/medical')
  findAllMedical() {
    return this.masterService.findAllMedicals();
  }

  @Get('/medical/:medical_id')
  findOneMedical(@Param('medical_id') medical_id: string) {
    return this.masterService.findOneMedical(medical_id);
  }

  @Post('/medical')
  createMedical(@Body() dto: CreateMedicalDto) {
    return this.masterService.createMedical(dto);
  }

  @Patch('/medical/:medical_id')
  updateMedical(
    @Param('medical_id') medical_id: string,
    @Body() dto: UpdateMedicalDto,
  ) {
    return this.masterService.updateMedical(medical_id, dto);
  }

  @Delete('/medical/:medical_id')
  deleteMedical(@Param('medical_id') medical_id: string) {
    return this.masterService.deleteMedical(medical_id);
  }

  // Award methods
  @Get('/award')
  findAllAwards() {
    return this.masterService.findAllAwards();
  }

  @Get('/award/:award_id')
  findOneAward(@Param('award_id') award_id: string) {
    return this.masterService.findOneAward(award_id);
  }

  @Post('/award')
  createAward(@Body() dto: CreateAwardDto) {
    return this.masterService.createAward(dto);
  }

  @Patch('/award/:award_id')
  updateAward(
    @Param('award_id') award_id: string,
    @Body() dto: UpdateAwardDto,
  ) {
    return this.masterService.updateAward(award_id, dto);
  }

  @Delete('/award/:award_id')
  deleteAward(@Param('award_id') award_id: string) {
    return this.masterService.deleteAward(award_id);
  }

  // Mission methods
  @Get('/mission')
  findAllMissions() {
    return this.masterService.findAllMissions();
  }

  @Get('/mission/:mission_id')
  findOneMission(@Param('mission_id') mission_id: string) {
    return this.masterService.findOneMission(mission_id);
  }

  @Post('/mission')
  createMission(@Body() dto: CreateMissionDto) {
    return this.masterService.createMission(dto);
  }

  @Patch('/mission/:mission_id')
  updateMission(
    @Param('mission_id') mission_id: string,
    @Body() dto: UpdateMissionDto,
  ) {
    return this.masterService.updateMission(mission_id, dto);
  }
}
