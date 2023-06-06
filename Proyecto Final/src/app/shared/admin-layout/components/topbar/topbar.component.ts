import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../../../services/security/authentication.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  title = 'Curso de Angular';
  @Output()
  openSideEmitter: EventEmitter<boolean> = new EventEmitter();

  open = false;
  authenticationService: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
  }

  ngOnInit(): void {
  }

  clickButton() {
    this.open = !this.open;
    this.openSideEmitter.emit(this.open);
  }

  logOut(){
    this.authenticationService.logout();
  }
}
