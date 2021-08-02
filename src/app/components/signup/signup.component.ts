import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['',Validators.minLength(4)],
      lastName: ['',Validators.minLength(4)],
      email: ['',[Validators.required, Validators.email]],
      pwd: ['',Validators.minLength(4)],
      confirmPwd: ['',Validators.minLength(4)]
    });
   }

  ngOnInit() {
  }

  signup(user) {
    console.log('Signup user', user);
  }

}
