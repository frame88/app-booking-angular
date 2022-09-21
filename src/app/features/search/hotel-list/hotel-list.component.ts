import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
  <div class="hotel-container">
    <h2>{{hotels?.length}} Hotel in {{text}}</h2>
    <div class="flex-wrap">
      <app-hotel-card [images]="hotel.images" [city]='hotel.city' *ngFor="let hotel of hotels" [rating]="hotel.rate" [hotelStars]="hotel.stars" [id]='hotel.id' [title]='hotel.name' [price]='hotel.rooms[0].price' class='wrap-item'>
      </app-hotel-card>
    </div>
  </div>



  `,
  styles: [
  ]
})
export class HotelListComponent {

  @Input() hotels: Hotel[] | undefined;
  @Input() active: Hotel | undefined;
  @Input() text: string = '';
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>();
  }


