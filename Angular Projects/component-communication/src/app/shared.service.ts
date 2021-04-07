import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  names:Array<string>= new Array();
  constructor() { }

  setNames(name:any){     // set the value 
    this.names.push(name);
  }
  getNames():Array<string> {  // get the value 
    return this.names;
  }
}
