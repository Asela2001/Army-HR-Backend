import { IsString, IsOptional } from 'class-validator';

export class CreateRegimentDto {
  @IsString()
  regiment_id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  location: string;

  @IsString()
  address: string;
}
