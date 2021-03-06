import { AppointmentInterface } from '../interfaces';
import { Doctor } from './doctor';
import { Patient } from './patient';

export class Appointment {
  private _id: string;
  private _date: Date;
  private _doctor: Doctor;
  private _patient: Patient;
  private _description: string;
  private _status: string;

  constructor(appointment: AppointmentInterface) {
    const { id, date, doctor, patient, description, status } = appointment;
    this._id = id;
    this._date = date;
    this._doctor = doctor;
    this._patient = patient;
    this._description = description;
    this._status = status;
  }

  // getters
  get id(): string {
    return this._id;
  }
  get date(): Date {
    return this._date;
  }
  get doctor(): Doctor {
    return this._doctor;
  }
  get patient(): Patient {
    return this._patient;
  }
  get description(): string {
    return this._description;
  }
  get status(): string {
    return this._status;
  }

  // setters
  set date(date: Date) {
    this._date = date;
  }
  set doctor(doctor: Doctor) {
    this._doctor = doctor;
  }
  set patient(patient: Patient) {
    this._patient = patient;
  }
  set description(description: string) {
    this._description = description;
  }
  set status(status: string) {
    this._status = status;
  }
}
