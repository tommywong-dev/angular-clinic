import { UserInterface } from '../interfaces';

export class User {
  private _id: string;
  private _name: string;
  private _age: number;
  private _gender: number;
  private _phone_number: string;
  protected _password: string;

  constructor(user: UserInterface) {
    const { id, name, age, gender, phone_number, password } = user;
    this._id = id;
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._phone_number = phone_number;
    this._password = password;
  }

  // getters
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  get gender(): number {
    return this._gender;
  }
  get phone_number(): string {
    return this._phone_number;
  }
  // setters
  set name(name: string) {
    this._name = name;
  }
  set age(age: number) {
    this._age = age;
  }
  set gender(gender: number) {
    this._gender = gender;
  }
  set phone_number(phone_number: string) {
    this._phone_number = phone_number;
  }

  // methods
  login(password: string) {
    if (password !== this._password)
      throw new Error('Password does not match!');
    return true;
  }
  change_password(old_password: string, new_password: string) {
    if (old_password === this._password) {
      this._password = new_password;
      return;
    }
    throw new Error('Old password is not correct!');
  }
}
