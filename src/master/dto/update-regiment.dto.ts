import { IsString, IsOptional } from 'class-validator';

export class UpdateRegimentDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  location: string;

  @IsString()
  address: string;
}
