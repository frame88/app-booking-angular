import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule. forChild([
      { path:'', component: LoginComponent }
    ])
  ],
  exports: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
