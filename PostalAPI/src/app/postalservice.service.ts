import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostalserviceService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    this.httpClient.get<any>('http://www.postalpincode.in')
  }

}








// getAllData(): Observable<any> {
//   return this.http.get<any>(`${this.baseURL}/getAll`)
// }



