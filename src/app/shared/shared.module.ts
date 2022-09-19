import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login.component';
import { ReviewComponent } from './components/review.component';
import { ContactComponent } from './components/contact.component';
import { ReservationComponent } from './components/reservation.component';



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
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
