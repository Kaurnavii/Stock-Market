import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedin = false;
  constructor() { }
change(){
  this.isLoggedin = true;

}
change1(){
  this.isLoggedin = false;

}

}
