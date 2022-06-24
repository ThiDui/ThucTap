import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl="http://localhost:8080/user/login";
  constructor(private http: HttpClient) { }


  loginUser(user: any): Observable<object> {
    return this.http.post(`${this.baseUrl}`,user);
  }
}
