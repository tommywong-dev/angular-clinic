import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/classes/user';
import { UserInterface } from 'src/app/interfaces';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/classes/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    age: [0, Validators.required],
    gender: [0, Validators.required],
    phone_number: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.userForm.invalid) {
      this.snackbarService.open('Please fill in the form correctly', 'error');
      return;
    }

    const form: UserInterface = this.userForm.value;
    const patient: Patient = new Patient(form, 'unknown');
    try {
      this.patientService.register(patient);
      this.snackbarService.open(`Created ${patient.name}`, 'success');
      this.router.navigateByUrl('/');
    } catch (error) {
      this.snackbarService.open(error.message, 'error');
    }
  }
}
