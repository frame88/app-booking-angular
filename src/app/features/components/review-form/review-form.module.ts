import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewFormComponent } from '../review-form/review-form.component';




@NgModule({
  declarations: [
    ReviewFormComponent
  ],
  exports: [
    ReviewFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ReviewFormModule{}
