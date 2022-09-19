import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styles: [
  ]
})
export class HotelCardComponent {
  stars: number[] = [1, 2, 3,4,5]
}
