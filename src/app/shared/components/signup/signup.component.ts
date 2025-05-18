import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  logInForm!: FormGroup;
  alreadyHaveAnAccount: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
    });
  }

  createLogInForm() {
    this.logInForm = new FormGroup({
      email: new FormControl([null, Validators.required]),
      password: new FormControl([null, Validators.required]),
    });
  }
}
