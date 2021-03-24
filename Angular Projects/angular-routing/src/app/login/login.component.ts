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
    this.router.navigate(["home"]);
  }

}
