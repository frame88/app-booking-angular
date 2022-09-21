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
  @Input() id: number | undefined

  i: number  = 0;
  interval: any;

  changeImg():void{
   this.interval = setInterval(()=> {
      this.i += 1
      if(this.i >= this.images!.length){
        this.i = 0
      }
    },1000)

  };
  stopCarousel():void{
    clearInterval(this.interval)
  }
}
