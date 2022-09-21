import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descrizione',
  templateUrl: './descrizione.component.html',
  styleUrls: ['./descrizione.component.scss']
})
export class DescrizioneComponent {

 @Input() name!: string
}
