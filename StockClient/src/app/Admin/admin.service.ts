import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8008';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/admin`);
  }
  createCompany(company: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/company/create`,company);
  }
  updateCompany(company: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/company/update/`, company);
  }
  getCompanies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/company`);
  }

  createIPO(ipo: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/ipo/create`,ipo);
  }
  updateIPO(ipo: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/ipo/update`,ipo);
  }
  getIPOs(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/ipo`);
  }

  createStock(stock: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/stock/create`,stock);
  }
  updateStock(stock: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/stock/update`,stock);
  }
  getStocks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/stock`);
  }

}

