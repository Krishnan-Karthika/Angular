import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.employeeForm = this.fb.group({
      fullName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      }),
    });

    this.employeeForm.valueChanges.subscribe((value:any) => {
      console.log(JSON.stringify(value))
    });
  }



  // onLoadDataClick(): void {
  //   this.employeeForm.setValue({
  //     fullName: 'Karthika Krishnan',
  //     email: 'kkrish@gmail.com',
  //     skills: {
  //       skillName: 'C#',
  //       experienceInYears: 5,
  //       proficiency: 'beginner'
  //     }
  //   });
  // }

  onLoadDataClick(): void {
    this.employeeForm.patchValue({
      fullName: 'Karthika Krishnan',
      email: 'kkrish@gmail.com',
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

    console.log(this.employeeForm.controls['fullName'].value);
    console.log(this.employeeForm.get('fullName')?.value);



  }

}
