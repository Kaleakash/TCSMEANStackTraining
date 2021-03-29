import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  fun() {
    this.msg = "Welcome to Mat- Card Action events"
  }
}
