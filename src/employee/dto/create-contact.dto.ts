import { IsString, IsOptional } from 'class-validator';

export class CreateContactDto {
  @IsString()
  contact_id: string;

  @IsString()
  emp_no: string;

  @IsString()
  telephone: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
