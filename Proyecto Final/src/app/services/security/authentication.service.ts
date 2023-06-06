import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, filter, Observable, tap, throwError} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl: string = environment.backUrl + 'login'

  private _loggedIn: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string): Observable<any> {
    const login = {
      username: username,
      password: password
    }

    return this.http.post<any>(this.resourceUrl, login).pipe(
      catchError(err => {
        return throwError(() => 'Ocurrió un error, Usuario y/o contraseña inválidos');
      }), tap(response => {
        localStorage.setItem(environment.tokenName, response.token);
        let decodeToken = this.jwtHelper.decodeToken(response.token);
        let user : User = new User(decodeToken.username);
        this._loggedIn.next(user);
      })
    );
  }

  logout() {
    localStorage.removeItem(environment.tokenName);
    this._loggedIn.next(null)
    this.router.navigate(['login']);
  }

  get loggedIn() : Observable<User | null> {
    return this._loggedIn.asObservable().pipe(filter(u => u !== null))
  }

  isLoggedIn(): boolean {
    const token = this.token;
    if(token !== null && !this.jwtHelper.isTokenExpired(token)){
      if(this._loggedIn.value === null)
        this._loggedIn.next(new User(this.jwtHelper.decodeToken(token).username))
      return true;
    }
    return false;
  }

  get token(): string | null {
    return localStorage.getItem(environment.tokenName);
  }
}
