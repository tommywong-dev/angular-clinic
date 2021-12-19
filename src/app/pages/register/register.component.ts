import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserInterface } from 'src/app/interfaces';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    const form: UserInterface = this.userForm.value;
    console.log('form:', form);
    const { id, name, age, gender, phone_number, password } = form;
    const user: User = new User(id, name, age, gender, phone_number, password);
  }
}
