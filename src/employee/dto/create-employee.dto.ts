import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
  Length,
  IsIn,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  emp_no: string;

  @IsString()
  @IsNotEmpty()
  @Length(12, 12)
  nic_no: string;

  @IsString()
  @IsOptional()
  @Length(0, 20)
  passport_no?: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  last_name: string;

  @IsDateString()
  @IsNotEmpty()
  dob: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['M', 'F'])
  gender: string;

  @IsString()
  @IsOptional()
  @Length(0, 20)
  religion?: string;

  @IsString()
  @IsOptional()
  @Length(0, 20)
  nationality?: string;

  @IsOptional()
  photo_id?: Buffer;
}
