import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user=this.dataservice.currentUser;
  saveForm=this.fb.group({
    evedate:['',[Validators.required,Validators.pattern('[0-9]*')]],
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
    const res=this.dataservice.saveve(evedate,evedesc);
    if(res)
    alert("Saved Successfully");
    else
    alert("Try Again...")
    }
  }
  showevents()
  {
    this.router.navigateByUrl("showevents");
    
  }

}
