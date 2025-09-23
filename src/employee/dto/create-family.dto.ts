import { IsString, IsNumber, IsOptional, IsIn } from 'class-validator';

export class CreateFamilyDto {
  @IsString()
  family_id: string;

  @IsString()
  emp_no: string;

  @IsString()
  @IsIn(['Single', 'Married', 'Divorce'])
  marital_status: string;

  @IsOptional()
  @IsString()
  spouse_name?: string;

  @IsOptional()
  @IsNumber()
  number_of_children?: number;
}
