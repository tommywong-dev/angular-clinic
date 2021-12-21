import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/interfaces';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    id: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private patienService: PatientService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.invalid) {
      this.snackbarService.open('Please fill in the credentials', 'error');
      return;
    }
    const form: UserInterface = this.loginForm.value;
    const { id, password } = form;
    try {
      this.patienService.login(id, password);
      this.snackbarService.open('Logged in', 'success');
      this.router.navigateByUrl('/');
    } catch (error) {
      console.error(error);
      this.snackbarService.open(error.message, 'error');
    }
  }
}
