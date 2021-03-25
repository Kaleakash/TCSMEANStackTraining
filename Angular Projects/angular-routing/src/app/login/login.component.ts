import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }   //DI : Dependency Injection 
                                          // creating object withtout new kewyord 
  ngOnInit(): void {
  }
  homePage(){
    //Token must store when username and password must be correct 
    //session Id or JWT (Json web Token);
    sessionStorage.setItem("token","123");
    this.router.navigate(["home"]);
  }

}
