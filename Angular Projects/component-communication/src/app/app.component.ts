import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName:string="";
  passName(name:any){
    this.parentName=name;
  }
  products:Array<string>=new Array();
  addProduct(productName:any){
    this.products.push(productName);
  }
}
