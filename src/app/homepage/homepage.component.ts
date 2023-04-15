import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpAthenticationService } from '../signuppage/sign-up-athentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  constructor(public router: Router, public singUpService: SignUpAthenticationService, public fb: FormBuilder) {}
  JobFilterForm:any;
  findJobBtnClicked: any;
  domainNames = [
    { name: 'Angular Developer', id: 1},
    { name: 'Java Developer', id: 2},
    { name: '.Net Developer', id: 3},
    { name: 'Php Developer', id: 4},
    { name: 'Oracle Developer', id: 5},
    { name: 'Tester', id:6},
    { name: 'Business Associate', id: 7},
    { name: 'Digital Marketing Manager', id: 8},
    { name: 'Product Director', id: 9}
    ];

    experiences = [ 1,2,3,4,5,6,7,8,9,10];
    Locations = [
      {name: 'Andhra Pradesh'},
      {name: 'hydrabad'},
      {name: 'Assam'},
      {name: 'Coimbatore'},
      {name: 'Chhattisgarh'},
      {name: 'Goa'},
      {name: 'Noida'},
      {name: 'Chennai'},
      {name: 'New Delhi'},
      {name: 'Jharkhand'},
      {name: 'Karnataka'},
      {name: 'Kerala'},
      {name: 'Pondicherry'},
      {name: 'Cochin'},
      {name: 'Manipur'},
      {name: 'Meghalaya'},
      {name: 'Mizoram'},
      {name: 'Nagaland'},
      {name: 'Bangalore'},
      {name: 'Pune'},
      {name: 'Rajasthan'},
      {name: 'Sikkim'},
      {name: 'Telangana'},
      {name: 'Tripura'},
      {name: 'Uttarakhand'},
      {name: 'Uttar Pradesh'},
      {name: 'West Bengal'}
    ]
    ngOnInit() {
      this.JobFilterForm =  this.fb.group({
        domainName: [null, Validators.required],
        experience: [null, Validators.required],
        location: [null, Validators.required]
      })
    }

    findJob() {
      this.findJobBtnClicked = true;
      setTimeout(()=>{
        this.router.navigate(['/jobs']);
        this.singUpService.saveJobFilter(this.JobFilterForm.value);
        localStorage.setItem('jobFilter',JSON.stringify(this.JobFilterForm.value))
        this.findJobBtnClicked = false;
      }, 3000);
    }
}
