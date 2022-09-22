import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { FormsModule } from '@angular/forms';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { GalleryModule } from 'ng-gallery';
import { TakePipe } from './pipes/take.pipe';





@NgModule({
  declarations: [
    HotelCardComponent,
    GenericCardComponent,
    PopupComponent,
    TakePipe,

  ],
  exports: [
    GenericCardComponent,
    HotelCardComponent,
    PopupComponent,
    TakePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GalleryModule
  ],
})
export class SharedModule {  }
