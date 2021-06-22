import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user=this.dataservice.username;
  saveForm=this.fb.group({
    evedate:['',[Validators.required]],
    evedesc:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }

  saveve()
  {
    if(this.saveForm.valid)
    {
    var evedate=this.saveForm.value.evedate;
    var evedesc=this.saveForm.value.evedesc;
    this.dataservice.saveve(evedate,evedesc)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
      }
     },
     (result)=>{
       alert(result.error.message)
       
     })
    }
    /*if(this.currentID){
    let user=this.accountDetails;
    let uID=this.currentID;
    user[uID].events.push({
      evedate:edate,evedesc:edesc
    })
    return true;
    }
    else
    return false;
  }*/
  }
  showevents()
  {
    this.router.navigateByUrl("showevents"); 
  }
}
