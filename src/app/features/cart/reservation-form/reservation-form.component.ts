import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-reservation-form',
  template: `

      <div
          class="horiz-grid separator my-cart"
          *ngFor="let item of cart.items"
      >
        <span>

          <div class="font-medium">{{item.hotel?.name}}</div>

          <div class="label">Camera {{item.room?.label}}</div>

        </span>


          <span class="price">{{item.room?.price}} €</span>

          <span>
              <i
                  class="icon ion-ios-trash"
                  (click)="cart.removeFromCart(item)"
              ></i>
          </span>

          <div class="break"></div>

      </div>

      <button
          *ngIf="cart.items.length"
          type="submit"
          (click)="cart.proceed()"
          class="cstm-btn"
      >Procedi</button>

      <br>
      <br>

      <div class="horiz-grid">

          <div></div>
          <em>{{cart.items.length}} items</em>

      </div>

  `,
  styleUrls: ['../cart.component.scss']
})
export class ReservationFormComponent {

  constructor(public cart: CartService) { }

}
