import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styles: [
  ]
})
export class HotelCardComponent {
  stars: number[] = [1, 2, 3,4,5];
  @Input() title: string | undefined;
  @Input() hotelStars: number | undefined;
  @Input() rating: number |undefined;
  @Input() price: number | undefined;
  @Input() city: string | undefined;
  @Input() images: string[] | undefined


}
