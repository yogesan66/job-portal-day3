import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpAthenticationService } from './sign-up-athentication.service';
import {FireAuthService} from '../services/fire-auth.service';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit{
  signUpForm: any;
  registerBtnClick = false;
  pattern1 =  "^[0-9A-Za-z]*";
  confirmPassword: any;
  passwordMatching: any = true;
  confirmPasswordNotEntered: any;
  showPassword: any = false;
  showConfirmPassword:any = false;
  credentialsNotMatching: any = false;
  credentialsNotentered: any = false;
  RegisteredSuccessfully: any = false;
  loginBtnClicked: any = false;
  AllfieldsNotEntered: any = false;
  constructor(
     public fb: FormBuilder,
     public signUpService: SignUpAthenticationService,
     public cdRef:ChangeDetectorRef,
     private fireAuth:FireAuthService,
     private toastrAlert: ToastrService
     ) {}
  ngOnInit() {
  this.signUpForm = this.fb.group({
    email: [null,Validators.email],
    password: [null,[Validators.required,Validators.pattern(this.pattern1)]],
  });
  this.signUpForm.controls.email.valueChanges.subscribe((data: any)=> {
    if (data) {
      this.AllfieldsNotEntered = false;
      this.credentialsNotentered = false;
      this.credentialsNotMatching = false;
    }
  });
  this.signUpForm.controls.password.valueChanges.subscribe((data: any)=> {
    if (data) {
      this.AllfieldsNotEntered = false;
      this.credentialsNotentered = false;
      this.credentialsNotMatching = false;
    }
  });
  this.confirmPassword.valueChanges.subscribe((data: any)=> {
    if (data) {
      this.AllfieldsNotEntered = false;
      this.credentialsNotentered = false;
      this.credentialsNotMatching = false;
      this.passwordMatching = false;
    }
  });
  }

  registerClick() {
    this.signUpForm.reset();
    this.AllfieldsNotEntered = false;
    this.RegisteredSuccessfully = false;
    this.credentialsNotentered = false;
    this.confirmPassword = '';
    this.registerBtnClick = true;
    this.credentialsNotMatching = false;
  }
  loginClick(){
    this.signUpForm.reset();
    this.AllfieldsNotEntered = false;
    this.RegisteredSuccessfully = false;
    this.credentialsNotentered = false;
    this.confirmPassword = '';
    this.registerBtnClick = false;
    this.credentialsNotMatching = false;
}

  register() {
    this.loginBtnClicked = true;

    setTimeout(() => {
    if(this.signUpForm.value.email !== null && this.signUpForm.value.password !== null && this.confirmPassword == '') {
      this.confirmPasswordNotEntered = true;
    } else {
      this.AllfieldsNotEntered = true;
      this.credentialsNotentered = true;
      this.confirmPasswordNotEntered = false;
    }
    if (this.confirmPassword !== '') {
       if(this.confirmPassword === this.signUpForm.value.password) {
         this.passwordMatching = true;
         this.RegisteredSuccessfully = true;
        //  this.signUpService.Register(this.signUpForm.value);
        this.fireAuth.signUpUser(this.signUpForm.value)

         this.signUpForm.reset();
         this.RegisteredSuccessfully = false;
         this.credentialsNotentered = false;
         this.registerBtnClick = false;
       } else {
        this.credentialsNotentered = false;
         this.AllfieldsNotEntered = false;
         this.passwordMatching = false;
       }
    }
    this.loginBtnClicked = false;
  },3000)
    this.cdRef.detectChanges();
  }

  login() {
    this.loginBtnClicked = true;
    let currentUserCredentials:any;
    setTimeout(() => {
      if (this.signUpForm.value.email === null && this.signUpForm.value.password === null) {
        this.credentialsNotentered = true;
        this.AllfieldsNotEntered = false;
        this.credentialsNotMatching = false;
        this.loginBtnClicked = false;
      } else {
        this.credentialsNotentered = false;
        // this.signUpService.Login(this.signUpForm.value);
        this.fireAuth.loginUser(this.signUpForm.value);
        // this.credentialsNotMatching = this.signUpService.credentialsNotMatching;
        // if(this.credentialsNotMatching) {
        //   this.credentialsNotentered = true;
        //   this.AllfieldsNotEntered = true;
        // } else {
        //   this.credentialsNotentered = false;
        // }
        this.loginBtnClicked = false;
      }
    },3000);
    // currentUserCredentials = localStorage.getItem('currentUser');
    // if(JSON.parse(currentUserCredentials).username === this.signUpForm.value.email && JSON.parse(currentUserCredentials).password === this.signUpForm.value.password) {
    //   this.credentialsNotMatching = false;
    //   console.log(true);
      
    // } else {
    //   this.credentialsNotMatching = true;
    //   console.log(false);
      
    // }
  }




}
