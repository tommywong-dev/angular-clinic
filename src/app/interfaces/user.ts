export interface UserInterface {
  id: string;
  name: string;
  age: number;
  gender: number;
  phone_number: string;
  password: string;
}

export interface PatientInterface extends UserInterface {
  illness: string;
}
