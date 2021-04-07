import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginInfo:any){
    if(loginInfo.user=="Raj" && loginInfo.pass=="123"){
      this.router.navigate(["success"]);
    }else {
      this.msg = "Invalid user name or password";
    }
  }
}
