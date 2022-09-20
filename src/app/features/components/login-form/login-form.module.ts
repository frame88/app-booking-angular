import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class LoginFormModule {}
