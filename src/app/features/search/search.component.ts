import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hotel } from 'src/app/model/hotel';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent  {

  constructor( private fb:FormBuilder,
    private http: HttpClient,
    ) {
      this.searchHotels(this.text);
     }
     activeImage: string | undefined;

     //  SearchBar

     text: string = 'roma';
     hotels: Hotel[] | undefined;
     active: Hotel | undefined;

     search: FormGroup = this.fb.group({
       text: ['Roma']
     })

     searchHotels(inputText: string){
       this.text = inputText;
       this.http.get<any[]>(`http://localhost:3000/hotels?city=${inputText}`)
           .subscribe(res => {
             if (!res.length){
               console.log('nessun risultato')
              //  this.router.navigateByUrl('search/no-results');
              //  return;
             }
             console.log(res)
             this.hotels = res;
          //  this.setActive(this.hotels[0]);
         });
     }
    //  setActive(hotel: Hotel){
    //    this.active = hotel;
    //    this.activeImage = hotel.images[0];
    //  }


}
