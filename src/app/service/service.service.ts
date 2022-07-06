import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl="http://localhost:8080";
  
//format json
  private httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',

  }),
};
  constructor(private http: HttpClient) { }


  loginUser(user: any): Observable<object> {
    return this.http.post(`${this.baseUrl}/user/login`,user);
  }

 getSendMess(): Observable<any>{
    const url = `${this.baseUrl}/messagesents`;
    return this.http.get<any>(url,this.httpOptions);
  }

  getReceiveMess(): Observable<any>{
    const url = `${this.baseUrl}/messagereceive`;
    return this.http.get<any>(url,this.httpOptions);
  }

  getSendStatistical(): Observable<any>{
    const url = `${this.baseUrl}/statistic?startDate=2022-05-02&endDate=2022-08-08`;
    return this.http.get<any>(url,this.httpOptions);
  }

  getRecieveStatistical(): Observable<any>{
    const url = `${this.baseUrl}/statistics?startDate=2022-05-05&endDate=2022-07-07`;
    return this.http.get<any>(url,this.httpOptions);
  }



}
