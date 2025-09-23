import { IsString, IsNumber } from 'class-validator';

export class UpdateRankDto {

  @IsString()
  r_name: string;

  @IsNumber()
  r_level: number;
}