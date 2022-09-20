import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { PrezziComponent } from './prezzi/prezzi.component';
import { HotelviewComponent } from './hotelview.component';



@NgModule({
  declarations: [
    DescriptionComponent,
    GooglemapComponent,
    PrezziComponent,
    HotelviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HotelviewModule { }
