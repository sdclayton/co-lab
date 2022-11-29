import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

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

  constructor(private http: HttpClient){}

  signup(email: string, password: string){
    return this.http.post<AuthResponseData>(SIGNUP_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>(LOGIN_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
  }
}
