import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private firestore:AngularFirestore
  ) { }
  uId:any;
  sendFeedback(data:any){
    this.firestore.collection('/generalUsers/').doc('common').collection('/feedback').add(data)
        .then(() => {
          console.log('feedback added successfully!');
          data.id = this.firestore.createId();
          this.uId = data.id
      
        })
        .catch((error) => {
          console.error(error);
        });
  }


  getNotificationData(){
    return this.firestore.collection('/generalUsers/').doc('common').collection('/feedback').snapshotChanges()

  }

  sendReview(data:any){
    this.firestore.collection('/generalUsers/').doc('common').collection('/review').add(data)
        .then(() => {
          console.log('review added successfully!');
          // data.id = this.firestore.createId();
          // this.uId = data.id
      
        })
        .catch((error) => {
          console.error(error);
        });
  }

  getReview(){
    return this.firestore.collection('/generalUsers/').doc('common').collection('/review').snapshotChanges()

  }

  sendJobRequirements(data:any){
    this.firestore.collection('/employer/').doc('uncommon').collection('/jobRequirement').add(data)
        .then(() => {
          console.log('requirement added successfully!');
          // data.id = this.firestore.createId();
          // this.uId = data.id
      
        })
        .catch((error) => {
          console.error(error);
        });
  }

  getJobRequirements(){
    return this.firestore.collection('/employer/').doc('uncommon').collection('/jobRequirement').snapshotChanges()

  }

}
