import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/model/hotel';

@Component({
  selector: 'app-prezzi',
  templateUrl: './prezzi.component.html',
  styleUrls: ['./prezzi.component.scss']
})
export class PrezziComponent{

  @Input() rooms: Room[] | undefined

}
