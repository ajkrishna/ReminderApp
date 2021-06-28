import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  evedate:any;
  evedesc:any;
  editForm=this.fb.group({
    evedate1:['',[Validators.required]],
    evedesc1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  
  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }
  isShown: boolean = false ; 
  isEdit:boolean=false;
  ngOnInit(): void {
   
  }
 
  display()
  {
    this.isEdit=false;
    this.isShown = ! this.isShown;
    if(this.isShown){
    
    this.dataservice.display(this.uID)
    .subscribe((result:any)=>{
      if(result){
        this.evdate=result.event_date;
        this.evdesc=result.event_desc;
        
      }
     },
     (result)=>{
       alert(result.error.message)
       
     })
  }
  console.log("dis",this.isShown)
  console.log("edit",this.isEdit)
}
refresh(){
  this.isEdit=false;
  this.dataservice.display(this.uID)
    .subscribe((result:any)=>{
      if(result){
        this.evdate=result.event_date;
        this.evdesc=result.event_desc;
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

editEvent(evedate:any,evedesc:any){
 
  this.isEdit = ! this.isEdit;
    if(this.isEdit)
    {
      this.evedate=evedate;
      this.evedesc=evedesc;
    }
  
}

editeve()
{
  if(this.editForm.valid)
    {
    var editdate=this.editForm.value.evedate1;
    var editdesc=this.editForm.value.evedesc1;
   // alert(editdate)
    //alert(editdesc)
    //alert(this.evedesc)
    this.dataservice.editeve(this.uID,editdate,editdesc,this.evedate,this.evedesc)
    .subscribe((result:any)=>{
      if(result)
      {
      alert(result.message);
       this.refresh();
       }
        },
      (result)=>{
      alert(result.error.message)
            })
     }
}
}