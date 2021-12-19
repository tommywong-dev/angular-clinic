export interface PaymentInterface {
  id: string;
  amount: number;
  date: Date;
  payee_name: string;
  payee_bank: string;
  payee_bank_account_number: string;
  success: boolean;
}
