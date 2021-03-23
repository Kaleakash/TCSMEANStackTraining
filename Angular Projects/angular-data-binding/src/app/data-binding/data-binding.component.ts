import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  fname:string="Ravi";
  lname:string="Kumar";
  age:number=21;
  skillInfo:string="";
  constructor() { }
  ngOnInit(): void {
  }
  fun():void {
    console.log("event fired....")
  }
  changeAge():void {
    this.age = 25;
  }
  addSkill(skill:any){
    console.log("Skill Name is "+skill);
    this.skillInfo = skill;
  }

}
