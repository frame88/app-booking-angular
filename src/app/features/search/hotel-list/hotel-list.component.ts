import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
    <app-hotel-card  *ngFor="let hotel of hotels"
    (click)="setActive.emit(hotel)"
    >
    </app-hotel-card>
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


