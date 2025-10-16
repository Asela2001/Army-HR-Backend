export interface ExpiringItem {
  id: string;
  name: string;
  expiryDate: string;
  daysLeft: number;
}

export interface PromotedEmployee {
  id: string;
  name: string;
  promotionDate: string;
}

export interface GenderStats {
  maleCount: number;
  femaleCount: number;
}

export interface RawMedicalHistory {
  mh_id: string;
  health_id: string;
  check_date: Date;
  expire_date: Date;
  status: string;
  employee_name: string;
  health_name: string;
}
