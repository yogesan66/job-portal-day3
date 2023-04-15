import { Component } from '@angular/core';
import { SignUpAthenticationService } from '../signuppage/sign-up-athentication.service';

@Component({
  selector: 'app-vieprofile',
  templateUrl: './vieprofile.component.html',
  styleUrls: ['./vieprofile.component.css']
})
export class VieprofileComponent {
  constructor(public signUpService:SignUpAthenticationService) {}
  viewAppliedForm:any;
  ngOnInit() {
    this.viewAppliedForm = this.signUpService.appliedJobDatas;
    console.log(this.viewAppliedForm);
    
  }
}
