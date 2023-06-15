import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  isExpanded = false;

  onExpandedPress(expanded: boolean) {
    this.isExpanded = expanded;
  }
}
