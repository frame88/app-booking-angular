import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  template: `

   <form [formGroup]='review' (submit)='sendReview.emit(review.value)' *ngIf="review">  <!-- ngIf da togliere (?) -->
    <div formControlName="rating" class="" >
      <i class="icon"
        *ngFor="let star of starId; let i = index"
        [ngClass]="{'ion-ios-star': rating >= star,
        'ion-ios-star-outline': rating < star
        }"
        (mouseenter)='onHoverStar(i)'
        (mouseleave)='onStarLeave()'
        (click)='onSetRating(i)'
        ></i>
    </div>
    <textarea cols="20" rows="4" placeholder="Your message*" formControlName="msg"></textarea>
    <div class='error' *ngIf='this.review.controls["msg"].errors'>
      Inserisci un messaggio
    </div>
    <div class='error' *ngIf='this.review.controls["rating"].errors'>
      Inserisci il voto
    </div>
    <button [disabled]="review.invalid" type="submit">SEND</button>
   </form>
  `
})
export class ReviewFormComponent {
  @Input() starId!: number[]
  @Input() rating!: number
  @Output() hoverStar:EventEmitter<number> = new EventEmitter()
  @Output() starLeave:EventEmitter<number> = new EventEmitter()
  @Output() setRating:EventEmitter<number> = new EventEmitter()


 onHoverStar(i: number){
  this.hoverStar.emit(this.starId[i])
 }
 onStarLeave(){
  this.starLeave.emit()
 }
 onSetRating(i: number){
  this.setRating.emit(this.starId[i])
 }

//  form info

@Input() review!: FormGroup
@Output() sendReview: EventEmitter<any>= new EventEmitter<any>()

}
