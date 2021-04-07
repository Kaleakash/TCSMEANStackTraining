import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  
  constructor(public ser:SharedService) { }

  ngOnInit(): void {
  }
  add(name:any){
    this.ser.setNames(name);
  }
}
