import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  template: `
    <form [formGroup]="contactForm" (submit)="sendEmail()">

      <label for="email" class="form-label text-secondary">La tua email</label>
      <input type="text" class="form-control" required id="email" formControlName="email" >

      <label for="msg" class="form-label text-secondary mt-3">Messaggio</label>
      <textarea cols="20" rows="3" class="form-control" id="msg" formControlName="msg"></textarea>
      <button  type="submit" [disabled]="contactForm.invalid" class="cstm-btn px-5">SEND</button>
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

  constructor( private fb: FormBuilder){}

  sendEmail(): void{
    console.log(`Inviato`);
  }

}
