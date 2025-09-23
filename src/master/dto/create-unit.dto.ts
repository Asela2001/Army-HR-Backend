import { IsString, IsOptional } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  unit_id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  location: string;

  @IsString()
  address: string;
}