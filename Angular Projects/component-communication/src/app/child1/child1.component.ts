import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()      // ready to receive the value from parent component 
  pName:string="";
 
  @Output()   // ready to emit the value 
  ageEventRef = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addAge(age:any){
    this.ageEventRef.emit(age);
  }
}
