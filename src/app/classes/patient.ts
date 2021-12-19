import { UserInterface } from '../interfaces';
import { User } from './user';

export class Patient extends User {
  private _illness: string = '';

  constructor(user: UserInterface, illness: string) {
    super(user);
    this._illness = illness;
  }

  // polymorphism from get name() of User
  get name(): string {
    return `${this.name} (PATIENT)`;
  }
  get illness() {
    return this._illness;
  }

  set illness(illness: string) {
    this._illness = illness;
  }
}
