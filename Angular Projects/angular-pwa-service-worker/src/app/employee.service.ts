import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  //post method for insert 
  //post method takes 2 parameter 
  //1st parameter url and 2nd parameter json data. 
  storeEmployee(emp:any){
    this.http.post("http://localhost:3000/employees",emp).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}
