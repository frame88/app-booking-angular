import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styles: [
  ]
})
export class HotelCardComponent implements OnInit{
  stars: number[] = [1, 2, 3,4,5];
  @Input() title: string | undefined;
  @Input() hotelStars: number | undefined;
  @Input() rating: number |undefined;
  @Input() price: number | undefined;
  @Input() city: string | undefined;
  @Input() images: string[] | undefined;
  @Input() id: number | undefined;

  i: number  = 0;
  interval: any;
  bigImg: string = '';
  slider: string[] | undefined = [];



  ngOnInit(): void {

    if (this.images) {

      this.bigImg = this.images[0];

      this.slider = this.images

      for (let i = 0; i < this.slider.length - 1; i++) {

        this.slider[i] = this.slider[i + 1]

      }

      this.slider[this.slider.length - 1] = this.bigImg

    }
  }


  changeImg():void{
    this.interval = setInterval(()=> {

      if (this.slider) {

        this.bigImg = this.slider[0];

        for (let i = 0; i < this.slider.length - 1; i++) {

          this.slider[i] = this.slider[i + 1]

        }

        this.slider[this.slider.length - 1] = this.bigImg

      }


    },2000)

  };
  stopCarousel():void{
    clearInterval(this.interval)
  }
}
