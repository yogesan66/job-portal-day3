import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignUpAthenticationService {

  credentialsNotMatching: any;
  JobFilterData: any;
  selectedJobList: any;
  appliedJobDatas: any = [];
  constructor(public router: Router) { }

  // Register(registerForm: any) {
  //   let user = {
  //     username: registerForm.email,
  //     password: registerForm.password
  //   }
  //   localStorage.setItem('currentUser', JSON.stringify(user));
  // }

  // Login(Form: any) {
  //   let currentUserCredentials:any;
  //   currentUserCredentials = localStorage.getItem('currentUser');
  //   if(JSON.parse(currentUserCredentials).username === Form.email && JSON.parse(currentUserCredentials).password === Form.password) {
  //     this.credentialsNotMatching = false;
  //     this.router.navigate(['/home']);
  //   } else {
  //     this.credentialsNotMatching = true;
  //   }
  // }

  saveJobFilter(data:any) {
    this.JobFilterData = data;
    console.log(this.JobFilterData);
    
  }

  applyNow(selectedjoblist:any) {
    this.selectedJobList = selectedjoblist;
  }

  appliedJobData(appliedjobdatas :any){
    this.appliedJobDatas.push(appliedjobdatas);
    console.log(this.appliedJobDatas);
    
  }
}
