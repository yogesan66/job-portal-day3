import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  
  @Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
  })
    contactForm:FormGroup|any;
  
    constructor(
      private apiService:ApiService
    ) {
      this.contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', Validators.required)
      });
    }
  
    onSubmit() {
      if (this.contactForm && this.contactForm.valid) {
        console.log(this.contactForm.value);
        this.apiService.sendFeedback(this.contactForm.value)
      }
    }
  }
