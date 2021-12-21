import { Injectable } from '@angular/core';
import { Appointment } from '../classes/appointment';
import { Doctor } from '../classes/doctor';
import { Patient } from '../classes/patient';
import { Schedule } from '../classes/schedule';
import { DoctorService } from './doctor.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private _appointments: Appointment[] = [];

  constructor(private doctorService: DoctorService) {}

  get appointments() {
    return this._appointments;
  }

  book_appointment(date: Date, doctor: Doctor, patient: Patient) {
    const description = `${patient.name} - ${patient.illness} by ${doctor.name}`;
    this._appointments.push(
      new Appointment({
        id: `A-${this._appointments.length}`,
        cancelled: false,
        date,
        doctor,
        patient,
        description,
      })
    );
    this.doctorService.add_schedule(doctor.id, date, description);
  }
}
