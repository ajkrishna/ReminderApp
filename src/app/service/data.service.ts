import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";
  currentID="";
  accountDetails:any={
    1000:{uid:1000,username:"userone",password:"userone",events:[]},
    1001:{uid:1001,username:"usertwo",password:"usertwo",events:[]},
    1002:{uid:1002,username:"userthree",password:"userthree",events:[]},
    1003:{uid:1003,username:"userfour",password:"userfour",events:[]}
        } 

  constructor() { }

  reg(uid:any,uname:any,pswd:any)
  {
  let user=this.accountDetails;
  if(uid in user)
    return false;

  else{
    user[uid]={
      uid,username:uname,password:pswd}
      return true; 
  }
  }

  login(uid:any,pwd:any)
  {
    let users=this.accountDetails;
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
            return false;}
  }
  saveve(edate:any,edesc:any)
  {
    if(this.currentID){
    let user=this.accountDetails;
    let uID=this.currentID;
    user[uID].events.push({
      evedate:edate,evedesc:edesc
    })
    console.log(user);
    
    return true;
    }
    else
    return false;
  }
  /*display()
  {
    if(this.currentID){
      let user=this.accountDetails;
      let uID=this.currentID;
      let html_data=``;
      let len=user[uID].events.length;
      console.log(len);
      console.log(user[uID].events);
      
      for(let i=0;i<len;i++)
      {
        html_data+=`<tr><td>${user[uID]["events"][i]["evedate"]}</td>
        <td>${user[uID]["events"][i]["evedesc"]}</td>
       </tr>`
       
      }
      //return html_data;
//document.querySelector("#result").innerHTML=html_data;
    }
  }*/
}
