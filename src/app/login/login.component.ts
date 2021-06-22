import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//user="";
  loginForm=this.fb.group({
    uid:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]]
  })
  
  constructor(private fb:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.loginForm.valid)
  {
  var uid=this.loginForm.value.uid;
  var pswd=this.loginForm.value.pswd;
    
    this.dataservice.login(uid,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        //this.user=result.name;
        this.dataservice.cuser(result.name,result.uid);
        this.router.navigateByUrl("dashboard");
      }
     },
     (result)=>{
       alert(result.error.message)
       
     })
  }
  /*let users=this.accountDetails;
            if(uid in users)
            {
            if(pwd==users[uid]["password"])
            {this.currentUser=users[uid]["username"];
            this.currentID=uid;
            return true;}
            else
            {alert("Incorrect password")
             return false;}
            }
            else
            { alert("Invalid UserID");
            return false;}*/
}



}
