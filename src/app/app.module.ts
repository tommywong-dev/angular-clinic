import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AppointmentsComponent,
    PaymentComponent,
    ProfileComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
