import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  flag:boolean = false;
  b1:string="show"
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.flag = !this.flag;
    if(this.b1=="show"){
      this.b1 = "hide"
    }else {
      this.b1 = "show"
    }
  }
}
