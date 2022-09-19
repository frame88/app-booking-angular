import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { GooglemapComponent } from './googlemap/googlemap.component';



@NgModule({
  declarations: [
    DescriptionComponent,
    GooglemapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HotelviewModule { }
