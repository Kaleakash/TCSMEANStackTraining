import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  fname:string="Ravi";
  age:number=21;
  skill:string="C++";
  constructor() { }
  ngOnInit(): void {
  }
  updateSkill(skillInfo:any){
    console.log(skillInfo);
    this.skill=skillInfo;
  }

}
