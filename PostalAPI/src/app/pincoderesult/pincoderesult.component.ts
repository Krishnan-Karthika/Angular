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
  displayedColumns: any[]=['index','Name','BranchType','PostOffice'];


  constructor(private pincodeservice:PincodeService, private router:Router) { }

  ngOnInit(): void {
    this.Printdata();
  }

  Printdata(){
    this.pincodeservice.getBranchUsingPin().subscribe({
      next:response => {
        console.log(response);
        this.data=response;
        console.log(this.data);
        if(this.data['0'].Status=='404' || this.data['0'].Status=='Error'){
          this.errorFlag="Error"
          console.log("Pincode doesn't exist")
          this.router.navigateByUrl('/errorpage');
        }
        else{
          this.errorFlag="Success"
        }
      }

    });
    console.log(this.data); //gives undefined

  }

}
