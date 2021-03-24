import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {

  loginRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }
  checkUser() {
    console.log(this.loginRef.value);   // all value 
    let user1 = this.loginRef.get("user")?.value;  // get specific control value. 
    let pass1 = this.loginRef.get("pass")?.value;
    console.log(user1+" "+pass1);
    if(user1=="Ravi" && pass1=="123"){
      this.msg = "Successfully Login!"
    }else {
      this.msg = "Failure try once again";
    }
  }

}
