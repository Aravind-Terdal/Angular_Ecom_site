import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpAuthService } from '../../services/sign-up-auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  logInForm!: FormGroup;
  alreadyHaveAnAccount: boolean = false;

  constructor(
    private _signUpAuthService: SignUpAuthService,
    private _snackBar: SnackbarService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createSignUpForm();
    this.createLogInForm();
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
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onRegister() {
    if (this.signUpForm.valid) {
      let user = this.signUpForm.value;
      this._signUpAuthService.registerUser(user).subscribe({
        next: (res) => {
          console.log(res);

          this._snackBar.openSnackBar(res.message);
          this.signUpForm.reset();
          this.alreadyHaveAnAccount = true;
        },
        error: (err) => {
          this._snackBar.openSnackBar(err.error.message);
        },
      });
    }
  }

  onLogIn() {
    if (this.logInForm.valid) {
      let user = this.logInForm.value;
      this._signUpAuthService.logInUser(user).subscribe({
        next: (res) => {
          this._snackBar.openSnackBar(res.message);
          this._signUpAuthService.saveToken(res.token);
          this._signUpAuthService.saveUserRole(res.userRole);
          this._router.navigate(['/home']);
          this.logInForm.reset();
        },
        error: (err) => {
          this._snackBar.openSnackBar(err.error.message);
        },
      });
    }
  }
}
