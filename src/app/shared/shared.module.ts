import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HotelCardComponent,
    GenericCardComponent
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
