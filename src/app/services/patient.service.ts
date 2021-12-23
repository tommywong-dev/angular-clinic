import { Injectable } from '@angular/core';
import { Patient } from '../classes/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private _patients: Patient[] = [
    new Patient(
      {
        id: '1',
        name: 'Test',
        password: '1234',
        age: 60,
        gender: 1,
        phone_number: '91238712',
      },
      'Heart-attack'
    ),
  ];
  private _logged_in_user: Patient = {} as Patient;

  constructor() {}

  get patients() {
    return this._patients;
  }
  get logged_in_user() {
    return this._logged_in_user;
  }

  register(newUser: Patient) {
    if (this._patients.findIndex((user) => user.id === newUser.id) !== -1) {
      throw new Error('User with similar ID has already exist!');
    }
    this._patients.push(newUser);
  }

  login(id: string, password: string) {
    const userIndex = this._patients.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User does not exist!');
    }
    if (!this._patients[userIndex].login(password)) {
      throw new Error('Password does not match!');
    }

    this._logged_in_user = this._patients[userIndex];
    return this.logged_in_user;
  }

  update(updatingPatient: Patient) {
    const patientIndex = this._patients.findIndex(
      (patient) => patient.id === updatingPatient.id
    );
    this._patients[patientIndex] = updatingPatient;
    this._logged_in_user = updatingPatient;
  }
}
