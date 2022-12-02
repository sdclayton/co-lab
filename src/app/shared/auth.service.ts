import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";


import { User } from "./user.model";
import { Router } from "@angular/router";

//Firebase credentials
const SIGNUP_KEY = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0-ebfD9PLUPURd4_HS8YIegHCpg97ASE';

const LOGIN_KEY = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0-ebfD9PLUPURd4_HS8YIegHCpg97ASE';

export interface AuthResponseData {
  kind?: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  user = new Subject<User>();

  constructor(private http: HttpClient, private router: Router){}

  signup(email: string, password: string){
    return this.http.post<AuthResponseData>(SIGNUP_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          )
        })
      )
  }

  storeUser(firstName: string, lastName: string){

  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>(LOGIN_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          )
        })
      )
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/login'])
  }

  handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number){
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
      // this.autoLogout(expiresIn * 1000);
      // localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred'
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
        break;
    }
    return throwError(errorMessage);
    }
}
