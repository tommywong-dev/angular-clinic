import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/classes/appointment';
import { AppointmentInterface } from 'src/app/interfaces';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, AfterViewInit {
  displayedColumns: (keyof AppointmentInterface)[] = [
    'id',
    'doctor',
    'date',
    'status',
    'description',
  ];
  my_appointments: AppointmentInterface[] =
    this.appointmentService.appointments.filter(
      (appointment) =>
        appointment.patient.id === this.patientService.logged_in_user.id
    );
  dataSource = new MatTableDataSource<AppointmentInterface>(
    this.my_appointments
  );

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
