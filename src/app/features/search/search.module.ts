import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';



@NgModule({
  declarations: [
    JumbotronComponent,
    SearchComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {path:'', component:SearchComponent}
    ])
  ],
  exports:[
    JumbotronComponent,
    SearchComponent
  ]
})
export class SearchModule { }
