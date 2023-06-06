import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/security/authentication.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn())
      this.router.navigate(['']);
  }

  login() {
    this.loading = true;

    const username = this.loginForm.get("username")?.value;
    const password = this.loginForm.get("password")?.value;

    this.authService.login(username, password).subscribe(res => {
      this.loading = false;
      if (res)
        this.router.navigate(['']);
    }, error => {
      this.snackBar.open("Error", error)
      this.loading = false;
    })
  }
}
