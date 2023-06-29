import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        width: '70px',
      })),
      state('open', style({
        width: '200px',
      })),

      transition('* => closed', [
        animate('0.1s')
      ]),
      transition('* => open', [
        animate('0.1s')
      ]),
    ])
  ]
})
export class AdminLayoutComponent {

  isExpanded = false;

  onExpandedPress(expanded: boolean) {
    this.isExpanded = expanded;
  }
}
