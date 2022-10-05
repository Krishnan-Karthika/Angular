import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent /*implements OnInit */{
  // employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  // ngOnInit(){
    employeeForm = this.fb.group({
      fullName: [''],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      }),
    });
  // }

  // onLoadDataClick(): void {
  //   this.employeeForm.setValue({
  //     fullName: 'Pragim Technologies',
  //     email: 'pragim@pragimtech.com',
  //     skills: {
  //       skillName: 'C#',
  //       experienceInYears: 5,
  //       proficiency: 'beginner'
  //     }
  //   });
  // }

  onLoadDataClick(): void {
    this.employeeForm.patchValue({
      fullName: 'Pragim Technologies',
      email: 'pragim@pragimtech.com',
      // skills: {
      //   skillName: 'C#',
      //   experienceInYears: 5,
      //   proficiency: 'beginner'
      // }
    });
  }

  onSubmit(): void{
    // console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.touched);

    console.log(this.employeeForm.controls.fullName.value);
    console.log(this.employeeForm.get('fullName')?.value);



  }

}
