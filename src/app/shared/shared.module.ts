import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../features/components/login/login.component';
import { ReviewComponent } from '../features/components/review/review.component';
import { ContactComponent } from '../features/components/contact/contact.component';
import { ReservationComponent } from '../features/components/reservation/reservation.component';



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
    GenericCardComponent,
    HotelCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class SharedModule { }
