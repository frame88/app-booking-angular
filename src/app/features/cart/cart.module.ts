import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CartComponent,
    ReservationFormComponent
  ],
  exports: [
    CartComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:'', component:CartComponent}
    ])
  ]
})
export class CartModule { }
