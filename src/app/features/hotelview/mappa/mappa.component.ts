import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.scss']
})
export class MappaComponent {

  @Input() address!: string

}
