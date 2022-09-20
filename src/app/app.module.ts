import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './features/search/search.module';
import { LoginFormModule } from './features/components/login-form/login-form.module';
import { ContactFormModule } from './features/components/contact-form/contact-form.module';
import { ReservationFormComponent } from './features/components/reservation-form/reservation-form.component';
import { ReviewFormModule } from './features/components/review-form/review-form.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './features/login/login.module';
import { CartModule } from './features/cart/cart.module';
import { Hotelview3Component } from './features/hotelview3/hotelview3.component';
import { PrezziComponent } from './features/hotelview3/prezzi/prezzi.component';
import { MappaComponent } from './features/hotelview3/mappa/mappa.component';
import { DescrizioneComponent } from './features/hotelview3/descrizione/descrizione.component';




@NgModule({
  declarations: [
    AppComponent,
    ReservationFormComponent,
    Hotelview3Component,
    PrezziComponent,
    MappaComponent,
    DescrizioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    SearchModule,
    LoginFormModule,
    ContactFormModule,
    ReviewFormModule,
    HttpClientModule,
    SearchModule,
    LoginModule,
    CartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
