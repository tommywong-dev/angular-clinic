import { Injectable } from '@angular/core';
import { Doctor } from '../classes/doctor';
import { Schedule } from '../classes/schedule';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private _doctors: Doctor[] = [
    new Doctor({
      id: 'dr-wong',
      age: 30,
      gender: 1,
      name: 'Dr. Wong',
      password: 'password',
      phone_number: '1234567890',
    }),
    new Doctor({
      id: 'dr-amy',
      age: 50,
      gender: 0,
      name: 'Dr. Amy',
      password: '123456',
      phone_number: '987654321',
    }),
    new Doctor({
      id: 'dr-lee',
      age: 22,
      gender: 1,
      name: 'Dr. Lee Wei Xiang',
      password: '123456',
      phone_number: '12394876',
    }),
  ];

  constructor() {}

  get doctors() {
    return this._doctors;
  }

  add_schedule(id: string, datetime: Date, description: string) {
    const unfortunate_doctor = this._doctors.find((doctor) => doctor.id === id);
    if (!unfortunate_doctor) return;
    unfortunate_doctor.schedules.push(new Schedule({ description, datetime }));
  }
}
