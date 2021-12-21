import { UserInterface } from '../interfaces';
import { User } from './user';

export class Patient extends User {
  private _illness: string = '';

  constructor(user: UserInterface, illness: string) {
    super(user);
    this._illness = illness;
  }

  get illness() {
    return this._illness;
  }

  set illness(illness: string) {
    this._illness = illness;
  }
}
