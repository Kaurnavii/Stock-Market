import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8008';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}`+`/users`+`/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/users/create`,user);
  }

  updateUser(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/user/update`,user);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/users`);
  }
  getAdmin(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/admin`);
  }
}

