import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule. forChild([
      { path:'', component: LoginComponent }
    ])
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
