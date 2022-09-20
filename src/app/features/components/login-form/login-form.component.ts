import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper centered">

      <div class="card vh-centered" [ngClass]="{'error': auth.error}">

        <div class="title">Login</div>

        <div class="content">

          <form #f="ngForm" (submit)="auth.login(f.value)">

            <input type="text" required placeholder="Username" [ngModel] name="user" >

            <input type="password" required placeholder="password" [ngModel] name="pass" >

            <button type="submit" [disabled]="f.invalid">SIGN-IN</button>

          </form>

        </div>

      </div>

    </div>
  `,
  styles: [
  ]
})
export class LoginFormComponent {

  constructor(public auth: AuthService) { }

}
