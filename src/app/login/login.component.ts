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

  loginForm=this.fb.group({
    uid:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]]
  })
  user:any;

  constructor(private fb:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }


  login()
  {
    if(this.loginForm.valid)
  {
  var uid=this.loginForm.value.uid;
  var pswd=this.loginForm.value.pswd;

    const res=this.dataservice.login(uid,pswd);
    this.user=this.dataservice.currentUser
    if(res)
      this.router.navigateByUrl("dashboard");
  }
}



}
