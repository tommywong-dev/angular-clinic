import { Injectable } from '@angular/core';
import { Payment } from '../classes/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private _payments: Payment[] = [];

  constructor() {}

  get payments() {
    return this._payments;
  }

  create_payment(payment: Payment): void {
    this._payments.push(payment);
  }
}
