import { ScheduleInterface } from '../interfaces';

export class Schedule {
  private _description: string;
  private _datetime: Date;

  constructor(schedule: ScheduleInterface) {
    const { description, datetime } = schedule;
    this._description = description;
    this._datetime = datetime;
  }

  // getters
  get description() {
    return this._description;
  }
  get datetime() {
    return this._datetime;
  }

  // setters
  set description(description: string) {
    this._description = description;
  }
  set datetime(datetime: Date) {
    this._datetime = datetime;
  }
}
