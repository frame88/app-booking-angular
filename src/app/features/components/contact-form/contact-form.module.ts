import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';


@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    ReactiveFormsModule
  ]
})
export class ContactModule {}
