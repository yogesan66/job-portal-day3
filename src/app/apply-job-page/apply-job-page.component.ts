import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpAthenticationService } from '../signuppage/sign-up-athentication.service';

@Component({
  selector: 'app-apply-job-page',
  templateUrl: './apply-job-page.component.html',
  styleUrls: ['./apply-job-page.component.css']
})
export class ApplyJobPageComponent {

  jobTypes: any = ['Full Time', 'Part Time', 'Freelance', 'Internship', 'Temporary'];
  selectedJobList: any;
  applyJobForm: any;
  applyJobBtnClicked: any;
  constructor(public signUpService: SignUpAthenticationService, public fb:FormBuilder, public router: Router) {}
  ngOnInit() {

    let Job = JSON.parse(localStorage.getItem('jobFilter') ||'{}')
    let email = localStorage.getItem('emailId')
    this.applyJobForm = this.fb.group({
      name: [null,Validators.required],
      jobTitle: [Job.domainName, Validators.required],
      location: [Job.location, Validators.required],
      experience: [Job.experience, Validators.required],
      jobType: [null, Validators.required],
      keySkills: [null, Validators.required],
      emailAddress: [email, Validators.required],
      contact: [null, Validators.required],
      uploadResume: [null, Validators.required]
    })
    this.selectedJobList = this.signUpService.selectedJobList;
  }

  jobTypeClick(jobType:any) {
    this.applyJobForm.controls.jobType.patchValue(jobType); 
  }

  ApplyJob() {
    console.log(this.applyJobForm.value);
    this.applyJobBtnClicked = true;
    if(this.applyJobForm.valid) {
      setTimeout(()=>{
        this.signUpService.appliedJobData(this.applyJobForm.value);
        this.applyJobBtnClicked = false;
        this.router.navigate(['/appliedjobslist']);
      },3000)
    } else {
      setTimeout(() => {
       this.applyJobBtnClicked = false;
      },3000);
    }
    
  }
}
