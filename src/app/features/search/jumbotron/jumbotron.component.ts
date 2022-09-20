import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent  {

  @Input() search!: FormGroup;
  @Output() searchHotels: EventEmitter<string> = new EventEmitter<string>
}
