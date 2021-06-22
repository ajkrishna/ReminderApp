import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({
    uid:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  reg()
  {
    if(this.registerForm.valid)
    {
    var uid=this.registerForm.value.uid;
    var pswd=this.registerForm.value.pswd;
    var uname=this.registerForm.value.uname;
    this.dataservice.reg(uid,uname,pswd)
    .subscribe((result:any)=>{
      if(result)
      {
      alert(result.message);
      this.router.navigateByUrl("")
       }
        },
      (result)=>{
      alert(result.error.message)
            })
     }/*let user=this.accountDetails;
  if(uid in user)
    return false;

  else{
    user[uid]={
      uid,username:uname,password:pswd}
      return true; 
  }*/
  }
}
