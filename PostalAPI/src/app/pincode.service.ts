import { Injectable } from '@angular/core';
import { IData } from './IData';
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

  getData():Observable<IData>{
    return this.data;
  }

  setApiWithPin(pin:number){
    this.pincode_url=this.baseUrl+'/pincode/'+pin;
  }

  setApiWithBranch(branch:string){
    this.branch_url=this.baseUrl+'/postoffice/'+branch;
  }

  getDetailsUsingPin():Observable<IData>{
    this.data= this.httpClient.get<IData>(this.pincode_url);
    return this.data;
  }

  getDetailsUsingBranch():Observable<IData>{
    this.data= this.httpClient.get<IData>(this.branch_url);
    return this.data;
  }

}
