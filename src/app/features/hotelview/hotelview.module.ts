import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DescrizioneComponent } from './descrizione/descrizione.component';
import { HotelviewComponent } from './hotelview.component';
import { MappaComponent } from './mappa/mappa.component';
import { PrezziComponent } from './prezzi/prezzi.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ArrowscrollComponent } from './arrowscroll/arrowscroll.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
      HotelviewComponent,
      ReviewFormComponent,
      ContactFormComponent,
      DescrizioneComponent,
      MappaComponent,
      PrezziComponent,
      ServiziComponent,
      ArrowscrollComponent
    ],
    exports: [
      HotelviewComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild([
        {path: '', component: HotelviewComponent}
      ]),
      MatIconModule
    ]
})
export class HotelviewModule {}

