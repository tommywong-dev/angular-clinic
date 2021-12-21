import { Doctor } from '../classes/doctor';
import { Patient } from '../classes/patient';

export interface AppointmentInterface {
  id: string;
  date: Date;
  doctor: Doctor;
  patient: Patient;
  description: string;
  cancelled: boolean;
}
