import { Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName:string="";
  
  childAge?:number;


  @ViewChild(Child2Component)   // Inject Child2 reference in parent component 
  child2?:Child2Component;

  childDesg?:string;
  passName(name:any){
    this.parentName=name;
  }
  products:Array<string>=new Array();
  addProduct(productName:any){
    this.products.push(productName);
  }

  callChild2Function() {
    this.child2?.child2Fun();     // calling child function 
    this.childDesg=this.child2?.desg; // accessing child varible and storing in parent variable 
  }

}
