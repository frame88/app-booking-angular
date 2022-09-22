import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-generic-card',
	template: `

		<div class="card gen-card red" [ngClass]="state" >

			<h5 class="title my-title" (click)="close()">{{title}}</h5>

			<div class="card-body">

        <ng-content></ng-content>

			</div>

		</div>

	`,
	styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent {

  @Input() title: string = '';
  @Input() state: string = '';

  close() {

    if (this.state === 'contact' || this.state === 'review') {

      this.state += ' closed';

    } else if (this.state === 'contact closed') {

      this.state = 'contact';

    } else if (this.state === 'review closed') {

      this.state = 'review';

    }
  }

}
