import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-jumbotron',
  template: `
    <!-- SEARCHBAR -->
    <div class="container-fluid mt-2">
      <form [formGroup]="search" class="container searchbar text-center d-flex justify-content-center">
        <div class="label">
          <span class="text-light">dove vuoi andare:</span>
        </div>
        <input placeholder="Cerca..." class="form" type="text" formControlName="text">
        <button id="search" (click)="searchHotels.emit(search.value.text.toLowerCase())" type="submit">SEARCH</button>
      </form>
    </div>

    <!-- PALME E AEREO -->
    <div class="container-fluid">
      <div class="container palme d-flex justify-content-center align-items-end">
        <div class="container-aereo" [ngClass]="status ? 'rotate' : 'danger'">
          <img id="aereo" class="img-fluid" src="../../../../assets/img/aereo.png" alt="aereo">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./jumbotron.component.scss']
})

export class JumbotronComponent  {

  // (keyup.enter)="clickEvent($event)"



  @Input() search!: FormGroup;
  @Output() searchHotels: EventEmitter<string> = new EventEmitter<string>

  @Input() status: boolean | undefined;
}
