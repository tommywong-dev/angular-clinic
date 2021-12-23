import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientInterface } from 'src/app/interfaces';
import { PatientService } from 'src/app/services/patient.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  patientForm = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    age: [0, Validators.required],
    gender: [0, Validators.required],
    phone_number: ['', Validators.required],
    illness: ['', Validators.required],
  });

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router
  ) {
    const { id, name, age, gender, phone_number, illness } =
      this.patientService.logged_in_user;
    this.patientForm.setValue({ id, name, age, gender, phone_number, illness });
  }

  ngOnInit(): void {}

  update() {
    if (this.patientForm.invalid) {
      this.snackbarService.open('Please fill in the form correctly', 'error');
      return;
    }

    const form: PatientInterface = this.patientForm.value;
    const patient: Patient = new Patient(form, form.illness);
    try {
      this.patientService.update(patient);
      this.snackbarService.open(`Updated ${patient.name}`, 'success');
      this.router.navigateByUrl('/');
    } catch (error) {
      this.snackbarService.open(error.message, 'error');
    }
  }
}
