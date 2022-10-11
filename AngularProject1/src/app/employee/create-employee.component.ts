import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
  FormControl,
} from '@angular/forms';
import { CustomValidators } from '../shared/custom.validators';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  formErrors = {
    fullName: '',
    email: '',
    confirmEmail: '',
    emailGroup: '',
    phone: '',
    skillName: '',
    experienceInYears: '',
    proficiency: '',
  };

  validationMessages = {
    fullName: {
      required: 'Full Name is required.',
      minlength: 'Full Name must be greater than 2 characters.',
      maxlength: 'Full Name must be less than 10 characters.',
    },
    email: {
      required: 'Email is required.',
      emailDomain: 'Email domain should be dell.com',
    },
    confirmEmail: {
      required: 'Confirm Email is required.',
    },
    emailGroup: {
      emailMismatch: 'Email and Confirm Email do not match.'
    },
    phone: {
      required: 'Phone is required.',
    },
    skillName: {
      required: 'Skill Name is required.',
    },
    experienceInYears: {
      required: 'Experience is required.',
    },
    proficiency: {
      required: 'Proficiency is required.',
    },
  };

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      contactPreference: ['email'],
      emailGroup: this.fb.group({
        email: ['',[Validators.required, CustomValidators.emailDomain('dell.com')]],
        confirmEmail: ['', Validators.required],
      },{ validator: matchEmails }),
      phone: [''],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required],
      }),
    });

    (this.employeeForm as any)
      .get('contactPreference')
      .valueChanges.subscribe((data: string) => {
        this.onContactPrefernceChange(data);
      });

    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });
  }

  onContactPrefernceChange(selectedValue: string) {
    const phoneFormControl = this.employeeForm.get('phone');
    if (selectedValue === 'phone') {
      phoneFormControl?.setValidators(Validators.required);
    } else {
      phoneFormControl?.clearValidators();
    }
    phoneFormControl?.updateValueAndValidity();
  }

  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      (this.formErrors as any)[key] = '';
        if (
          abstractControl &&
          !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)
        ) {
          const messages = (this.validationMessages as any)[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              (this.formErrors as any)[key] += messages[errorKey] + ' ';
            }
          }
        }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  onLoadDataClick(): void {

    const formArray1 = this.fb.array([
      new FormControl('John', Validators.required),
      new FormControl('IT', Validators.required),
      new FormControl('Male', Validators.required),
    ]);

    const FormGroup = this.fb.group([
      new FormControl('John', Validators.required),
      new FormControl('IT', Validators.required),
      new FormControl('Male', Validators.required),
    ]);

    console.log(formArray1);
    console.log(FormGroup);

  }

  onSubmit(): void {
    // console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.touched);

    console.log(this.employeeForm.controls['fullName'].value);
    console.log(this.employeeForm.get('fullName')?.value);
  }
}

function matchEmails(group: AbstractControl): { [key: string]: any } | null {
  const emailControl = group.get('email');
  const confirmEmailControl = group.get('confirmEmail');

  if (
    emailControl?.value === confirmEmailControl?.value || confirmEmailControl?.pristine) {
    return null;
  } else {
    return { emailMismatch: true };
  }
}
