import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-generic-card',
	template: `

		<div class="card gen-card">

			<h5 class="title my-title">{{title}}</h5>

			<div class="card-body">

        <ng-content></ng-content>

			</div>

		</div>

	`,
	styles: [
	]
})
export class GenericCardComponent {

  @Input() title: string = '';
  @Input() outside: boolean = false;


}
