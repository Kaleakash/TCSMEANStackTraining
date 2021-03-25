import { Component, OnInit } from '@angular/core';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg1:string="";
  constructor() { }

  ngOnInit(): void {
  }

  fun() {
    let obj = new MyService();  // created the object. 
    this.msg1=obj.sayHello();
  }
}
