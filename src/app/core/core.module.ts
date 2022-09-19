import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { JumbotronComponent } from '../features/search/jumbotron/jumbotron.component';


@NgModule({
  declarations: [
    NavbarComponent,
    JumbotronComponent
  ],
  exports:[
    NavbarComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
