import { Component, OnInit,ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  userEmailId:any;

  constructor(
    private apiService :ApiService,
    private elementRef: ElementRef
  ){}

  user :string =''
  jobseeker :boolean = false;
  employer :boolean = false;
  ngOnInit(): void {
    this.userEmailId =localStorage.getItem('emailId')
    console.log('from nav',this.userEmailId)
    this.get()
    this.user = localStorage.getItem('user') || '{}'
    if(this.user === 'jobseeker'){
      this.jobseeker = true
    }
    if(this.user === 'employer'){
      this.employer = true
    }
  }
  ngDoCheck(){

  }
  openPopup(){
    const popup:any  = document.getElementById('popup');
    popup.classList.toggle('show');

  }


  get(){
    this.apiService.getNotificationData().subscribe((res) =>{
      this.notification = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        console.log('the array data',data)
        return data
      })
    },err =>{
  
    })
  }
  notification :any = []


}
