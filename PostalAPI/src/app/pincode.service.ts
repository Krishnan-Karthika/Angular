import { Injectable } from '@angular/core';
import { IRoot } from './IRoot';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  baseUrl="https://api.postalpincode.in";

  pincode_url!:string;
  branch_url!:string;
  data!:any;

  constructor(private httpClient:HttpClient) { }

  // getDetailsByPincode{}
  // getDetailsBy{}


//this.data= this.http.get(this.url+'/'+pin);






getPostofficeByPincode(pincode: number): Observable<IRoot[]> {
  this.data = this.httpClient.get<IRoot[]>(`${this.baseUrl}/${pincode}`)
      .pipe(catchError(this.handleError));
      return this.data;
}

getPostofficeByBranch(branch: string): Observable<IRoot> {
  this.data = this.httpClient.get<IRoot>(`${this.baseUrl}/${branch}`)
      .pipe(catchError(this.handleError));
      return this.data;
}

private handleError(errorResponse: HttpErrorResponse) {
  if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
  } else {
      console.error('Server Side Error :', errorResponse);
  }
  return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}




sendPin(pin:number){
  console.log("in service");
  console.log(pin);
  this.pincode_url=this.baseUrl+'/pincode/'+pin;
  console.log(this.pincode_url);
}
getBranchUsingPin():Observable<IRoot>{
  this.data= this.httpClient.get<IRoot>(this.pincode_url);
  console.log(this.data); //observable data
  return this.data;
}
getData():Observable<IRoot>{
  return this.data;
}
sendBranch(branch:string){
  console.log(branch);
  this.branch_url=this.baseUrl+'/postoffice/'+branch;
  console.log(this.branch_url);
}
getPinUsingBranch():Observable<IRoot>{
  this.data= this.httpClient.get<IRoot>(this.branch_url);
  return this.data;
}

}


