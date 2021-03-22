import { Component } from '@angular/core';   

@Component({
  selector: 'abc',       // user-defined tags. 
  templateUrl: './app.component.html',  // connected html page 
  styleUrls: ['./app.component.css']    // connected css page 
})
export class AppComponent {
  name:string="Akash";
  
  id:number=123;
  fname:string="Raj Deep";
  age:number=21;

}
