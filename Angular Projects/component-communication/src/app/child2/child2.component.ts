import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input()
  productNamesFromParent:Array<string>=new Array();
  
  desg?:string="Tester";
  
  constructor() { }

  ngOnInit(): void {
  }

  child2Fun() {
    console.log("Parent component called...")
  }
}
