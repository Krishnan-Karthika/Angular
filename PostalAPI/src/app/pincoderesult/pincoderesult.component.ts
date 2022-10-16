import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-pincoderesult',
  templateUrl: './pincoderesult.component.html',
  styleUrls: ['./pincoderesult.component.css']
})
export class PincoderesultComponent implements OnInit {
  data:any;
  errorFlag!:string;

  constructor(private pincodeservice:PincodeService, private router:Router) { }

  ngOnInit(): void {
    this.printData();
  }

  printData(){
    this.pincodeservice.getDetailsUsingPin().subscribe((response) => {
        this.data=response;
        if(this.data['0'].Status=='404' || this.data['0'].Status=='Error'){
          this.errorFlag="Error"
          console.log("Pincode doesn't exist");
          this.router.navigateByUrl('/home');
        }
        else{
          this.errorFlag="Success"
        }
      });
    }


  }
