import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  registered = true

  constructor(
    private auth : AngularFireAuth,
    private router: Router,
    private toastrAlert : ToastrService
  ) { 
    
  }

  signUpUser(data:any){
    this.auth.createUserWithEmailAndPassword(data.email,data.password).then((response:any) =>{
      console.log("res",response)
      console.log("user",response.user)
      this.SendEmailForVerification(response.user)

 
    })
    .catch((err =>{
    }))
  }

  SendEmailForVerification(user:any){
    user.sendEmailVerification().then((response:boolean) =>{

    },(err:any) =>{
    })

  }

  loginUser(data:any){
    this.auth.signInWithEmailAndPassword(data.email,data.password).then((response:any) =>{

    if( response.user?.emailVerified == true){
      this.router.navigate(['navigate'])
      console.log("gmail",response.user._delegate.email)
      localStorage.setItem('emailId',response.user._delegate.email)
    // localStorage.setItem('token','true')
    // console.log("confirmed",data.email)
    // localStorage.setItem('userEmail',data.email);
    }else{
    }
   })
   .catch((err =>{
  }))
  }




}
