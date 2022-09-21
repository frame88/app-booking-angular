import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Hotel } from 'src/app/model/hotel';
import { Review } from 'src/app/model/review';

@Component({
  selector: 'app-hotelview3',
  templateUrl: './hotelview.component.html',
  styleUrls: ['./hotelview.component.scss']
})
export class HotelviewComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private http: HttpClient,
    private router:Router,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  // Reviews
  active: Hotel | undefined;
  rating: number = 0;
  hover:number = 0;
  stars: number[] = [1, 2, 3,4,5]

  review: FormGroup = this.fb.group({
    rating:['', Validators.required],
    msg: ['']
  })

  onHoverStar( i:number){
    this.hover =  this.stars[i - 1]
    }

  onStarLeave() {
    this.hover = 0
  }

  onSetRating(i:number){
    this.rating = this.stars[i - 1];
    this.review.controls['rating'].setValue(this.rating);
  }

  sendReview({msg}: { msg: string}): void{
    let params: Review = {
      stars: this.rating,
      review: msg,
      hotel: this.active?.name,
      user: this.auth.data?.name
    }
    console.log(this.review.getRawValue() )
    this.http.post<Review>('http://localhost:3000/reviews', params)
    .pipe(
      catchError((err)=> of(err))
    )
    .subscribe(
    );
    console.log(params)
    this.rating = 0;
    this.review.reset()
    //this.router.navigateByUrl('search/success')
  }

}
