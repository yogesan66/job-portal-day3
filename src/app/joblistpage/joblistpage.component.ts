import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpAthenticationService } from '../signuppage/sign-up-athentication.service';
import { ApiService } from '../services/api.service';

interface joblist {
      domainName:string,
      companyName:string,
      location: string,
      salary: string,
      experience: string,
      skills: string,
      vacancies:string
}

@Component({
  selector: 'app-joblistpage',
  templateUrl: './joblistpage.component.html',
  styleUrls: ['./joblistpage.component.css']
})
export class JoblistpageComponent implements OnInit{
  
  constructor(public signUpService: SignUpAthenticationService,
     public router: Router,
     private apiService:ApiService
     ) {
  }
  selectedJobFilterData: any;
  filteredJobLists: any;
     jobLists: joblist[] = [];


  // jobLists: any = [
  //   {
  //     domainName: 'Java Developer',
  //     companyName: 'Web Technology pvt.Ltd',
  //     location: 'Bangalore',
  //     salary: '14LPA/annum',
  //     experience: '4',
  //     skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
  //   },
  //   {
  //     domainName: 'Angular Developer',
  //     companyName: 'Web Technology pvt.Ltd',
  //     location: 'Noida',
  //     salary: '10LPA/annum',
  //     experience: '3',
  //     skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
  //   },
  //   {
  //     domainName: '.Net Developer',
  //     companyName: 'Web Technology pvt.Ltd',
  //     location: 'Noida',
  //     salary: '10LPA/annum',
  //     experience: '3',
  //     skills: '.NET, AngualrJS, ReactJS, PHP'
  //   },
  //   {
  //     domainName: 'Angular Developer',
  //     companyName: 'FrontEnd Technology pvt.Ltd',
  //     location: 'Chennai',
  //     salary: '12LPA/annum',
  //     experience: '2',
  //     skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
  //   },
  //   {
  //     domainName: 'Java Developer',
  //     companyName: 'FrontEnd Technology pvt.Ltd',
  //     location: 'Bangalore',
  //     salary: '13LPA/annum',
  //     experience: '4',
  //     skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
  //   },
  //   {
  //     domainName: 'Php Developer',
  //     companyName: 'FrontEnd Technology pvt.Ltd',
  //     location: 'Pune',
  //     salary: '7LPA/annum',
  //     experience: '3',
  //     skills: 'MongoDB, Docker, SQL, PHP, Oracle'
  //   },
  //   {
  //     domainName: 'Angular Developer',
  //     companyName: 'zoho Technology pvt.Ltd',
  //     location: 'Chennai',
  //     salary: '7LPA/annum',
  //     experience: '2',
  //     skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
  //   },
  //   {
  //     domainName: 'Oracle Developer',
  //     companyName: 'Web Technology pvt.Ltd',
  //     location: 'Noida',
  //     salary: '10LPA/annum',
  //     experience: '4 years',
  //     skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
  //   },
  //   {
  //     domainName: '.Net Developer',
  //     companyName: 'FrontEnd Technology pvt.Ltd',
  //     location: 'Noida',
  //     salary: '9LPA/annum',
  //     experience: '3',
  //     skills: '.NET, AngualrJS, ReactJS, PHP'
  //   },
  //   {
  //     domainName: 'Angular Developer',
  //     companyName: 'viewSpot Technology pvt.Ltd',
  //     location: 'Chennai',
  //     salary: '8LPA/annum',
  //     experience: '2',
  //     skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
  //   },
  //   {
  //     domainName: 'Java Developer',
  //     companyName: 'viewSpot Technology pvt.Ltd',
  //     location: 'Bangalore',
  //     salary: '10LPA/annum',
  //     experience: '4',
  //     skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
  //   },
  //   {
  //     domainName: 'Angular Developer',
  //     companyName: 'viewSpot Technology pvt.Ltd',
  //     location: 'Bangalore',
  //     salary: '14LPA/annum',
  //     experience: '2',
  //     skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
  //   },
  //   {
  //     domainName: '.Net Developer',
  //     companyName: 'viewSpot Technology pvt.Ltd',
  //     location: 'Noida',
  //     salary: '8LPA/annum',
  //     experience: '3',
  //     skills: '.NET, AngualrJS, ReactJS, PHP'
  //   },
  //   {
  //     domainName: 'Angular Developer',
  //     companyName: 'Web Technology pvt.Ltd',
  //     location: 'Chennai',
  //     salary: '6LPA/annum',
  //     experience: '2',
  //     skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
  //   },
  //   {
  //     domainName: 'Java Developer',
  //     companyName: 'Dev Technology pvt.Ltd',
  //     location: 'Bangalore',
  //     salary: '9LPA/annum',
  //     experience: '4',
  //     skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
  //   },
  // ];

  ngOnInit() {
    this.getJobList()
    this.filter()
debugger
    
  }


  filter(){
    this.selectedJobFilterData = JSON.parse(localStorage.getItem('jobFilter') || '{}');
    this.filteredJobLists = this.jobLists.filter((data:any)=>{
      if (data.domainName === this.selectedJobFilterData.domainName) {
        console.log('same')
        return data
      }
      console.log('selected',this.selectedJobFilterData)
      console.log('data',data)
    });
    

    console.log('filtered',this.filteredJobLists);

    
  }
  ngDoCheck(){
    this.filter()
  }

  getJobList(){
    this.apiService.getJobRequirements().subscribe((res) =>{
      this.jobLists = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        console.log('the jobrequirement array got',data)
        return data
      })
      console.log('jobList',this.jobLists.push({
            domainName: 'Angular Developer',
            companyName: 'FrontEnd Technology pvt.Ltd',
            location: 'Chennai',
            salary: '12LPA/annum',
            experience: '1',
            skills: 'HTML, CSS, Javascript, Angular 8+, ngrx',
            vacancies:'12'
          },));

    },err =>{
  
    })
  }
  applyNowBtnClick(joblist:any) {
    this.signUpService.applyNow(joblist);
    this.router.navigate(['/applyjobs']);
  }

  
  }
