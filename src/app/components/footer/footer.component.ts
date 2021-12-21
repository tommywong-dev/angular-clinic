import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  details = [
    {
      key: 'address',
      value: '127, Jalan MashPotato, 50500, Potato Island, Malaysia',
    },
    {
      key: 'operating hours',
      value: '9:00am - 5:00pm',
    },
    {
      key: 'contact us',
      value: '+6016-505-0000',
    },
    {
      key: 'help',
      value: 'Customer Service',
    },
  ];

  partners = [
    'Ching Meng Hong',
    'Fock Xue Yen',
    'Wong Jee Neng',
    'Wong Szee Mei',
    'Shane Lai',
  ];

  constructor() {}

  ngOnInit(): void {}
}
