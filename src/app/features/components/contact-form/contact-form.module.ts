import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact-form.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ReactiveFormsModule
  ]
})
export class ContactModule {}
