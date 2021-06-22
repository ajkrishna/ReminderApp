import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
const options={
  withCredentials:true
}

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
  username: any;
  uID: any;
  

  constructor(private http:HttpClient) {}

  reg(uid:any,uname:any,pswd:any)
  {
    const data={
      uid,
      uname,
      pswd
    }
   return this.http.post("http://localhost:3000/register",data)
  }
  cuser(name:any,uid:any)
  {
    this.username=name;
    this.uID=uid;
  }

  login(uid:any,pwd:any)
  {
    const data={
      uid,
      pwd
    }
    return this.http.post("http://localhost:3000/login",data,options)
  }
  saveve(edate:any,edesc:any)
  {
    const data={
      edate,
      edesc
    }
    return this.http.post("http://localhost:3000/saveve",data,options)
    
}
display(uid:any)
  { const data={
    uid
  }
    return this.http.post("http://localhost:3000/display",data,options)
  }
}
