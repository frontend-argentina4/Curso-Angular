import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-admin-topbar',
  templateUrl: './admin-topbar.component.html',
  styleUrls: ['./admin-topbar.component.css']
})
export class AdminTopbarComponent {

  @Output()
  expandioBoton = new EventEmitter<boolean>();

  expandido = false;

  onClick() {
    this.expandido = !this.expandido;
    this.expandioBoton.emit(this.expandido);
  }

}
