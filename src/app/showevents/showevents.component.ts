import { Component, EventEmitter, Input, OnInit, Output, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-showevents',
  templateUrl: './showevents.component.html',
  styleUrls: ['./showevents.component.css']
})
export class ShoweventsComponent implements OnInit {
   
   uID=this.dataservice.uID;
  evdate: any;
  evdesc: any;
  e_id:any;
  constructor(private router:Router,private dataservice:DataService) { }
  isShown: boolean = false ; 
  ngOnInit(): void {
   
  }
 
  display()
  {
    this.isShown = ! this.isShown;
    if(this.isShown){
    
    this.dataservice.display(this.uID)
    .subscribe((result:any)=>{
      if(result){
        this.evdate=result.event_date;
        this.evdesc=result.event_desc;
        this.e_id=result.event_id;
      }
     },
     (result)=>{
       alert(result.error.message)
       
     })
  }
}
refresh(){
  this.dataservice.display(this.uID)
    .subscribe((result:any)=>{
      if(result){
        this.evdate=result.event_date;
        this.evdesc=result.event_desc;
        this.e_id=result.event_id;
      }
     },
     (result)=>{
       alert(result.error.message)
       
     })
}

removeItem(evedate:any,evedesc:any)
{ 
  this.dataservice.deleve(this.uID,evedate,evedesc)
  .subscribe((result:any)=>{
    if(result){
     alert(result.message)
     this.refresh();
    }
   },
   (result)=>{
     alert(result.error.message)
     
   }) 
}
}