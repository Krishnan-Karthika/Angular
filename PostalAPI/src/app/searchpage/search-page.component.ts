import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-search',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchFormByPincode!: FormGroup;
  searchFormByBranch!: FormGroup;
  data!: any;

  constructor(private pincodeservice:PincodeService ,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchFormByPincode = this.fb.group({
      pincode : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
    });

    this.searchFormByBranch = this.fb.group({
      branch : ['',[Validators.required]]
    });

  }

  SubmitPincode(){
    const code = this.searchFormByPincode.get('pincode')?.value;
    console.log("Pincode Field value");
    console.log(code);
    this.pincodeservice.setUrlWithPin(code);
    }
  SubmitBranch(){
    const branch = this.searchFormByBranch.get('branch')?.value;
    console.log("Branch Field value");
    console.log(branch);
    this.pincodeservice.setUrlWithBranch(branch)
    }
}
