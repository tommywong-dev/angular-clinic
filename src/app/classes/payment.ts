import { PaymentInterface } from '../interfaces';

export class Payment {
  private _id: string;
  private _amount: number;
  private _date: Date;
  private _payee_name: string;
  private _payee_bank: string;
  private _payee_bank_account_number: string;
  private _success: boolean;

  constructor(payment: PaymentInterface) {
    const {
      id,
      amount,
      date,
      payee_name,
      payee_bank,
      payee_bank_account_number,
      success,
    } = payment;
    this._id = id;
    this._amount = amount;
    this._date = date;
    this._payee_name = payee_name;
    this._payee_bank = payee_bank;
    this._payee_bank_account_number = payee_bank_account_number;
    this._success = success;
  }

  // getters
  get id() {
    return this._id;
  }
  get amount() {
    return this._amount;
  }
  get date() {
    return this._date;
  }
  get payee_name() {
    return this._payee_name;
  }
  get payee_bank() {
    return this._payee_bank;
  }
  get payee_bank_account_number() {
    return this._payee_bank_account_number;
  }
  get success() {
    return this._success;
  }

  // setters
  set success(success: boolean) {
    this._success = success;
  }
}
