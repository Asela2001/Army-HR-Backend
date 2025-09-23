import { IsString, IsNumber } from 'class-validator';

export class CreateRankDto {
  @IsString()
  rank_id: string;

  @IsString()
  r_name: string;

  @IsString()
  r_level: string;
}
