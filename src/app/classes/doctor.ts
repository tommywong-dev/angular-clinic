import { UserInterface } from '../interfaces';
import { Schedule } from './schedule';
import { User } from './user';

export class Doctor extends User {
  private _schedules: Schedule[] = [];

  constructor(user: UserInterface) {
    super(user);
  }

  get schedules() {
    return this._schedules;
  }
  set schedules(schedules: Schedule[]) {
    this._schedules = schedules;
  }

  change_password(old_password: string, new_password: string) {
    if (old_password !== this._password) {
      throw new Error('Old password is not correct!');
    }
    if (new_password.length <= 6) {
      throw new Error('Password Too Weak!');
    }
    this._password = new_password;
  }
}
