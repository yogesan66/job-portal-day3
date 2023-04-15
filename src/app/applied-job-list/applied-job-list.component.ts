import { Component, OnInit } from '@angular/core';
import { SignUpAthenticationService } from '../signuppage/sign-up-athentication.service';

@Component({
  selector: 'app-applied-job-list',
  templateUrl: './applied-job-list.component.html',
  styleUrls: ['./applied-job-list.component.css']
})
export class AppliedJobListComponent implements OnInit{
   constructor(public signUpService: SignUpAthenticationService) {}
   appliedJobDatas: any;
   ngOnInit() {
     this.appliedJobDatas = this.signUpService.appliedJobDatas;
   }
}
