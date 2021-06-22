import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-showevents',
  templateUrl: './showevents.component.html',
  styleUrls: ['./showevents.component.css']
})
export class ShoweventsComponent implements OnInit {
   val:string | undefined ;
   //i: number | undefined;
   uID=this.dataservice.uID;
  evdate: any;
  evdesc: any;
  constructor(private router:Router,private dataservice:DataService) { }
  isShown: boolean = false ; 
  ngOnInit(): void {
   
  }
 
  /*display()
  {
    this.isShown = ! this.isShown;
    //this.dataservice.display();
    if(this.dataservice.currentID)
    {
      let users=this.dataservice.accountDetails;
      let uID=this.dataservice.currentID;
    let val=``;
      let len=users[uID].events.length;
     // console.log(len);console.log(users[uID].events);
      for(let i=0;i<len;i++)
        this.val+= users[uID]["events"][i]["evedate"] + ' ' + users[uID]["events"][i]["evedesc"]
  }
  }*/

  display()
  {
    this.isShown = ! this.isShown;
    if(this.isShown){
    
    this.dataservice.display(this.uID)
    .subscribe((result:any)=>{
      if(result){
       // alert(result.message);
        //console.log(result.event_date);
       // console.log(result.event_desc);
        this.evdate=result.event_date;
        this.evdesc=result.event_desc;
      }
     },
     (result)=>{
       alert(result.error.message)
       
     })
  }
}
}