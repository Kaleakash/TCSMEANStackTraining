import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake.model';
import { FakeService } from '../fake.service';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  //providers:[FakeService]     // register on component level 
})
export class FirstComponent implements OnInit {
  msg1:string="";
  msg2:string="";
  constructor(public service:FakeService) { } //DI : pull the object from container. 

  fakeData:Array<Fake>=[];
  
  ngOnInit(): void {
  }

  fun() {
    let obj = new MyService();  // created the object. 
    this.msg1=obj.sayHello();
  }
  display() {
    this.msg2 = this.service.sayHello();
  }

  callFakeSevice() {
    this.service.loadFakeData().subscribe(data=>this.fakeData=data);
  }

}
