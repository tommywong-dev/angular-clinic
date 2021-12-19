import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/classes/user';
import { UserInterface } from 'src/app/interfaces';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UsersService } from 'src/app/services/users.service';

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
    private usersService: UsersService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.userForm.invalid) {
      this.snackbarService.open('Please fill in the form correctly', 'error');
      return;
    }

    const form: UserInterface = this.userForm.value;
    const user: User = new User(form);
    try {
      this.usersService.register(user);
      this.snackbarService.open(`Created ${user.name}`, 'success');
    } catch (error) {
      this.snackbarService.open(error.message, 'error');
    }
  }
}
