import { IsString, IsOptional } from 'class-validator';

export class UpdateContactDto {
  @IsOptional()
  @IsString()
  telephone?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
