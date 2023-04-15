import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {



  myForm: FormGroup |any;
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


      
  constructor(
    private formBuilder: FormBuilder,
    private apiService :ApiService

    ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      domainName: ['', Validators.required],
      location: ['', Validators.required],
      salary: ['', Validators.required],
      experience: ['', Validators.required],
      skills: ['', Validators.required],
      vacancies: ['', Validators.required]
    });
  }




  post(){
    console.log(this.myForm.value);
    this.apiService.sendJobRequirements({
      companyName: this.myForm.value.companyName,
      domainName:  this.myForm.value.domainName,
      location:  this.myForm.value.location,
      salary: this.myForm.value.salary.toString(),
      experience:  this.myForm.value.experience.toString(),
      skills:  this.myForm.value.skills,
      vacancies:  this.myForm.value.vacancies.toString()
    })
    this.myForm.reset()

  }
}
