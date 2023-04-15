import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
  constructor(
    private router:Router,
  ){

  }
  hiringAnimation: AnimationOptions = {
    // path: 'https://assets1.lottiefiles.com/packages/lf20_52ebqe6w.json',
    path:'/assets/hiring for a job.svg'
  };

  searchingJobAnimation :AnimationOptions = {
    // path: 'https://assets1.lottiefiles.com/packages/lf20_52ebqe6w.json',
    path:'/assets/searching for job.svg'
  };

  findJobs(){
   this.router.navigate(['/home'])
   localStorage.setItem('user','jobseeker')
  }
  hire(){
    // this.router.navigate(['/employer'])
    this.router.navigate(['/home'])

    localStorage.setItem('user','employer')
  }
}
