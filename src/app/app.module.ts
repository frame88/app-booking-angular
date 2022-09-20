import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import { SearchModule } from './features/search/search.module';
import { LoginFormModule } from './features/components/login-form/login-form.module';
import { ContactFormModule } from './features/components/contact-form/contact-form.module';
import { ReservationFormComponent } from './features/components/reservation-form/reservation-form.component';
import { ReviewFormModule } from './features/components/review-form/review-form.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    ReservationFormComponent


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
    ReviewFormModule
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
