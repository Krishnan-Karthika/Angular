import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-branchresult',
  templateUrl: './branchresult.component.html',
  styleUrls: ['./branchresult.component.css']
})
export class BranchresultComponent implements OnInit {
  data:any;
  errorFlag!:string;

  constructor(private pincodeservice:PincodeService, private router:Router) { }


  ngOnInit(): void {
    this.printData();
  }

  printData(){
    this.pincodeservice.getDetailsUsingBranch().subscribe((response) => {
        this.data=response;
        if(this.data['0'].Status=='Error'){
          this.errorFlag="Error"
          console.log("Branch Name doesn't exist")
          this.router.navigateByUrl('/home');
        }
        else{
          this.errorFlag="Success"
        }
    })
    }
  }


