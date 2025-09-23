import { IsString, IsNumber, IsOptional, IsIn } from 'class-validator';

export class UpdateFamilyDto {
  @IsOptional()
  @IsString()
  @IsIn(['Single', 'Married', 'Divorce'], {
    message: 'marital_status must be Single, Married, or Divorce',
  })
  marital_status?: string;

  @IsOptional()
  @IsString()
  spouse_name?: string;

  @IsOptional()
  @IsNumber()
  number_of_children?: number;
}
