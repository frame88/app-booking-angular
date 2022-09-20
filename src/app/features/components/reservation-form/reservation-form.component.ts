import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-reservation',
  template: `
    <div class="wrapper">

      <div class="card">

          <div class="title">Cart ({{cart.items.length}})</div>

          <div class="content">

              <div
                  class="horiz-grid separator"
                  *ngFor="let item of cart.items"

              >

                  <div class="font-medium">{{item.hotel?.name}}</div>

                  <div>{{item.room?.label}}</div>

                  <div>{{item.room?.price}}</div>

                  <div>
                      <i
                          class="icon ion-ios-trash"
                          (click)="cart.removeFromCart(item)"
                      ></i>
                  </div>

              </div>

              <button
                  *ngIf="cart.items.length"
                  type="submit"
                  (click)="cart.proceed()"
              ></button>

              <br>
              <br>

              <div class="horiz-grid">

                  <div></div>
                  <em>{{cart.items.length}} item</em>

              </div>

          </div>

      </div>

    </div>
  `,
  styles: [
  ]
})
export class ReservationFormComponent {

  constructor(public cart: CartService) { }

}
