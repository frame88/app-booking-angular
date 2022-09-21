import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { FormsModule } from '@angular/forms';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';





@NgModule({
  declarations: [
    HotelCardComponent,
    GenericCardComponent,
    PopupComponent,

  ],
  exports: [
    GenericCardComponent,
    HotelCardComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
})
export class SharedModule {  }
