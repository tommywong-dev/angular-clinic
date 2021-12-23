import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/classes/payment';
import { PaymentInterface } from 'src/app/interfaces';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  now: string = new Date().toLocaleDateString();
  details = [
    { key: 'consultation fee', value: 'RM 200.00' },
    { key: 'service tax', value: '-' },
    { key: 'sst(6%)', value: 'RM 12.00' },
  ];
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}

  make_payment() {
    const payment: PaymentInterface = {
      id: `P-${this.paymentService.payments.length}`,
      amount: 200.0,
      date: new Date(),
      payee_bank: 'Some Bank',
      payee_bank_account_number: '1234567890',
      payee_name: 'Testing Name',
      success: true,
    };
    this.paymentService.create_payment(new Payment(payment));
  }
}
