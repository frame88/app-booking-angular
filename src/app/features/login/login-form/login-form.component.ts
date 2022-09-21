import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-login-form',
  template: `

    <form #f="ngForm" (submit)="auth.login(f.value)" class="mx-4 my-3">

      <label for="username" class="form-label text-secondary">Username</label>
      <input type="text" class="form-control" required id="username" [ngModel] name="user" >

      <label for="password" class="form-label mt-3 text-secondary">Password</label>
      <input type="password" class="form-control" id="password" required [ngModel] name="pass" >

      <button type="submit" [disabled]="f.invalid" class="btn btn-outline-info mt-5">ACCEDI</button>

    </form>

  `,
  styles: [
  ]
})
export class LoginFormComponent {

  constructor(public auth: AuthService) { }

}
