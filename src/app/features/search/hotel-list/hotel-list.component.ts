import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
  <div class="flex-wrap">
    <app-hotel-card *ngFor="let hotel of hotels" [rating]="hotel.rate" [hotelStars]="hotel.stars" [title]='hotel.name' [price]='hotel.rooms[0].price'
    >
    </app-hotel-card>
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


