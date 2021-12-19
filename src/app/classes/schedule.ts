import { ScheduleInterface } from '../interfaces';

export class Schedule {
  private _title: string;
  private _description: string;
  private _datetime: Date;

  constructor(schedule: ScheduleInterface) {
    const { title, description, datetime } = schedule;
    this._title = title;
    this._description = description;
    this._datetime = datetime;
  }

  // getters
  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get datetime() {
    return this._datetime;
  }

  // setters
  set title(title: string) {
    this._title = title;
  }
  set description(description: string) {
    this._description = description;
  }
  set datetime(datetime: Date) {
    this._datetime = datetime;
  }
}
