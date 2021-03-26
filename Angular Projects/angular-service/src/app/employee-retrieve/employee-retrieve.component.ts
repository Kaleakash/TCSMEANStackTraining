import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-retrieve',
  templateUrl: './employee-retrieve.component.html',
  styleUrls: ['./employee-retrieve.component.css']
})
export class EmployeeRetrieveComponent implements OnInit {
  employees:Array<Employee>=[];
  constructor(public empSer:EmployeeService) { } //DI for Employee Service 
  ngOnInit(): void {
    this.empSer.loadEmployeeDetails().subscribe(result=>this.employees=result,
      error=>console.log(error))
  }

}
