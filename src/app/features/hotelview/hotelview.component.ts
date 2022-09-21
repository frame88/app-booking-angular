import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-hotelview3',
  templateUrl: './hotelview.component.html',
  styleUrls: ['./hotelview.component.scss']
})
export class HotelviewComponent implements OnInit {

  pageTitle = 'Hotel Detail';
  errorMessage = '';
  hotel: Hotel | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private hotelService: HotelService) {
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


}
