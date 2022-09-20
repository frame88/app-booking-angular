import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  template: `
    <form [formGroup]="contactForm" (submit)="sendEmail(contactForm.value)">
      <input type="text" placeholder="Your email*" formControlName="email" >
      <textarea cols="20" rows="6" placeholder="Your message*" formControlName="msg"></textarea>
      <button  type="submit" [disabled]="contactForm.invalid">SEND</button>
    </form>
  `,
  styles: [
  ]
})
export class ContactFormComponent {

  contactForm: FormGroup = this.fb.group({
    email: ['', Validators.required, ],
    msg: ['', Validators.required],
  })

  constructor( private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any){}

  sendEmail({email, msg}: {email: string, msg: string}): void{
    console.log(`Inviato: ${email}, ${msg} ${this.data.hotelEmail}`);
  }

}
