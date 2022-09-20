import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    JumbotronComponent,
    SearchComponent
  ],
  exports:[
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    JumbotronComponent,
    SearchComponent
  ]
})
export class SearchModule { }
