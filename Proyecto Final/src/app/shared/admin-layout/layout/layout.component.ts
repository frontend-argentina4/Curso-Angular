import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
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
export class LayoutComponent implements OnInit {

  sideOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeSide(val: boolean) {
    this.sideOpen = val;
  }

}
