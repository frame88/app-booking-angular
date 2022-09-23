import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel, Room } from '../../../model/hotel';

@Component({
  selector: 'app-prezzi',
  templateUrl: './prezzi.component.html',
  styleUrls: ['./prezzi.component.scss']
})
export class PrezziComponent{

  @Input() hotel: Hotel | undefined
  @Output() addToCart: EventEmitter<Room> = new EventEmitter()
}
