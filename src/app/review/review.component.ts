import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

interface Message {
  gmailId:string;
  content: string;
  time: string;
  date:string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  messages: Message[] = [];

  constructor(
    private apiService:ApiService
  ){}
  ngOnInit(): void {
    this.getReviewFromFirestore()
  }

  
  onSendClick(event: Event) {
    event.preventDefault();
    const textarea = (event.target as HTMLElement).previousElementSibling as HTMLTextAreaElement;
    const content = textarea.value.trim();
    if (content) {
       let  message_obj = {
        gmailId:localStorage.getItem('emailId') || '{}',
        content: content,
        time: new Date().toLocaleTimeString(),
        date:new Date().toString()
      }
      this.messages.push(message_obj);
      textarea.value = '';
   this.apiService.sendReview(message_obj)

    }
  }

  getReviewFromFirestore(){
    this.apiService.getReview().subscribe((res) =>{
      this.messages = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        console.log('the review array',data)
        return data
      })
    },err =>{
  
    })
  }
  
  }








  