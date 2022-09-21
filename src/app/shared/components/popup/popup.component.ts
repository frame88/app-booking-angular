
import {Component } from '@angular/core';

  import { state, style, trigger, transition, animate } from '@angular/animations';



  @Component({
    selector: 'app-popup',
    animations: [
      trigger('collapsable', [
        state('opened',
          style ({
            height: '200px'
          })
        ),
        state('closed',
          style ({
            height: 0,
            padding: 0
          })
        ),
        transition('opened <=> closed', [
          animate('0.7s cubic-bezier(0.83, 0, 0.17, 1)')
        ])
      ])
    ],

    template: `



                <ng-content></ng-content>

             

    `,
    //styleUrls: ['./popup.component.scss']

  })

  export class
  PopupComponent {

    state ='opened';

    toggle() {
      this.state = this.state === 'opened' ? 'closed' : 'opened';
    }

  }

