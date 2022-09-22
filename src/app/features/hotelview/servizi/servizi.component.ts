import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.scss']
})
export class ServiziComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactWindow: boolean = false
  @Output() openContact:EventEmitter<boolean> = new EventEmitter()

  onOpenContact() {

    this.contactWindow = true;
    this.openContact.emit(this.contactWindow)

  }

}
