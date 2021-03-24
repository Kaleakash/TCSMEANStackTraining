import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  
  msg:string="";

  constructor() { }
  ngOnInit(): void {
  }
  checkUser(loginRef:any) {
    //console.log("Event generated");
    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(user1 == "Ajay" && pass1 == "123"){
      this.msg="Successfully LOgin"
    }else {
      this.msg = "Failure try once again";
    }
  }
}
