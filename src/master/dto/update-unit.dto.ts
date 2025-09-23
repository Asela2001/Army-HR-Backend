import { IsString, IsOptional } from 'class-validator';

export class UpdateUnitDto {

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  location: string;

  @IsString()
  address: string;
}