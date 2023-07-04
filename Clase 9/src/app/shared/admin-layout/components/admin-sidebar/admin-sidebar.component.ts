import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  @Input()
  isExpanded = true;

  constructor(private router: Router) {
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
