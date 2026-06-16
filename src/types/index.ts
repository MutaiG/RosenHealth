export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
export type HealthcareTrack = 'GynMIS' | 'Maternity' | 'General';
export type FAQCategory = 'Laparoscopy' | 'Hysteroscopy' | 'Maternity' | 'General';

export interface AppointmentRequest {
  fullName: string;
  phone: string;
  email: string;
  track: HealthcareTrack;
  preferredDate: string;
  specialRequests?: string;
}

export interface Appointment extends AppointmentRequest {
  id: string;
  status: AppointmentStatus;
  createdAt: string;
}

export interface FAQ {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  sortOrder: number;
}

export interface AppointmentSummary {
  totalByStatus: Record<AppointmentStatus, number>;
  totalByTrack: Record<HealthcareTrack, number>;
  dailyCounts: { date: string; count: number }[];
}

export interface AuthRequest { email: string; password: string; }
export interface AuthResponse { accessToken: string; refreshToken: string; }
export interface ApiError { message: string; errors?: Record<string, string[]>; }
