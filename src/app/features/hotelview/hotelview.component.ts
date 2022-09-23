import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Hotel } from 'src/app/model/hotel';
import { Review } from 'src/app/model/review';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-hotelview3',
  templateUrl: './hotelview.component.html',
  styleUrls: ['./hotelview.component.scss']
})
export class HotelviewComponent implements OnInit {
  errorMessage = '';
  hotel: Hotel | undefined;

  pageTitle = 'Hotel Detail';



  constructor(private route: ActivatedRoute,
              public cart: CartService,
              private router: Router,
              private hotelService: HotelService,
              private fb:FormBuilder,
              private http: HttpClient,
              public auth: AuthService,
              ) {
              }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getHotel(id);
    }

  }

  getHotel(id: number): void {
    this.hotelService.getHotel(id).subscribe({
      next: ((hotel) => this.hotel = hotel),
      error: err => this.errorMessage = err
    });

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

  //contacts

  contacts: boolean = false

  openContact(i: boolean) {

    this.contacts = i
    console.log(this.contacts)

  }

}
