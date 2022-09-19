import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReservationComponent } from './components/reservation/reservation.component';



@NgModule({
  declarations: [
    HotelCardComponent,
    GenericCardComponent,
    LoginComponent,
    ReviewComponent,
    ContactComponent,
    ReservationComponent
  ],
  exports: [
    GenericCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HotelCardComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
