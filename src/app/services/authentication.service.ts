import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {} 
}

export class JwtRequest{
  constructor(
    public username:string,
    public password:string
     ) {}
}

export class JwtResponse{
  constructor(
    public token:string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(username, password) {
      //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.post<JwtResponse>(
        'http://192.168.2.153:8084/api/sign-in',
        {username, password})
        .pipe(
       map(
         tokenData => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('token', tokenData.token);
          
          return tokenData;
         }
       )
  
      );
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
}