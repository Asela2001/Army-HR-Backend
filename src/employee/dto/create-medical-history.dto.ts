export class CreateMedicalHistoryDto {
  mh_id: string;
  health_id: string;
  check_date: Date;
  expire_date: Date;
  status: string;
}
