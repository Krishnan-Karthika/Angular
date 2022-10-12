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
    console.log(code);
    this.pincodeservice.sendPin(code);
    }
  SubmitBranch(){
    const branch = this.searchFormByBranch.get('branch')?.value;
    console.log(branch);
    this.pincodeservice.sendBranch(branch)
    }

  // formErrors = {
  //   pincode: '',
  //   branch: '',
  // };

  // validationMessages = {
  //   pincode: {
  //     required: 'Pincode is required.',
  //     minlength: 'Pincode must have 6 digits',
  //     maxlength: 'Pincode must have 6 digits',
  //   },
  //   branch:{
  //     required: 'Branch is required.',
  //   }
  // };


  // logValidationErrors(group: FormGroup = this.searchFormByPincode): void {
  //   Object.keys(group.controls).forEach((key: string) => {
  //     const abstractControl = group.get(key);
  //     (this.formErrors as any)[key] = '';
  //     if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
  //       const messages = (this.validationMessages as any)[key];
  //       for (const errorKey in abstractControl.errors) {
  //         if (errorKey) {
  //           (this.formErrors as any)[key] += messages[errorKey] + ' ';
  //         }
  //       }
  //     }

  //     if (abstractControl instanceof FormGroup) {
  //       this.logValidationErrors(abstractControl);
  //     }
  //   });
  // }





}
