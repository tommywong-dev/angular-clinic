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
}
