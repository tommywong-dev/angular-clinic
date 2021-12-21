import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Doctor } from 'src/app/classes/doctor';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  appointmentForm = this.formBuilder.group({
    id: ['', Validators.required],
    datetime: ['', Validators.required],
  });
  doctors: Doctor[] = [];

  constructor(
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService
  ) {
    this.doctors = this.doctorService.doctors;
  }

  ngOnInit(): void {}

  bookNow() {
    if (this.appointmentForm.invalid) {
      this.snackbarService.open(
        'Please select all the required fields',
        'error'
      );
      return;
    }

    const form = this.appointmentForm.value;
    const { id, datetime } = form;

    const unfortunate_doctor = this.doctors.find((doctor) => doctor.id === id);
    if (!unfortunate_doctor) {
      this.snackbarService.open('Doctor is not found', 'error');
      return;
    }

    this.appointmentService.book_appointment(
      new Date(datetime),
      unfortunate_doctor,
      this.patientService.logged_in_user
    );

    this.snackbarService.open(
      `Appointment with ${unfortunate_doctor.name} has been booked successfully!`,
      'success'
    );
  }
}
