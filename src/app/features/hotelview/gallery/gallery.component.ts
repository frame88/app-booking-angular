import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-gallery',
  template: `
  <div class="image-grid">
    <img class="image-grid-col-2 image-grid-row-2" src="{{mainImg}}" alt="architecture">
    <img *ngFor="let img of imgArr | take " src="{{img}}" alt="">
  </div>
`,
  styles: [`
    body {
  margin: 0;
  }

.image-grid {
  --gap: 16px;
  --num-cols: 4;
  --row-height: 200px;

  box-sizing: border-box;
  padding: var(--gap);

  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  grid-auto-rows: var(--row-height);
  gap: var(--gap);
  img{
    border-radius: 15px;
  }
}

.image-grid > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-grid-col-2 {
  grid-column: span 2;
}

.image-grid-row-2 {
  grid-row: span 2;
}

/* Anything udner 1024px */
@media screen and (max-width: 1024px) {
  .image-grid {
    --num-cols: 2;
    --row-height: 200px;
  }
}

  `],
})
export class GalleryComponent implements OnInit{
@Input() images!: string[];

mainImg: string = '';
imgArr!: string[]
ngOnInit(){
  this.mainImg= this.images[0]
  this.imgArr = this.images.filter((img)=> img !== this.mainImg)

}





}
