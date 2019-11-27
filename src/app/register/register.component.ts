import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
     registerform:FormGroup
     submitted=false
  constructor(private payment: PaymentService,private formBuilder: FormBuilder,public router:Router) { }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]}
      , {
        validator: MustMatch('password', 'confirmPassword')
    })

  }
  get f() { return this.registerform.controls; }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerform.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' )
    this.router.navigate([''])
   
   
}
register(){
  let username="aa";
  let password="ss";
this.payment.accountCreation(username,password);
}
}
