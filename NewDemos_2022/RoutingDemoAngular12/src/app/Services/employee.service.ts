import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empdetails: Employee[];

  constructor() {
    this.empdetails = [

      new Employee(1, 'mayura', 'pune', 'Female', true),
      new Employee(2, 'Sam', 'mumbai', 'Male', false),
      new Employee(3, 'swathi', 'hyderabad', 'Male', false),
      new Employee(4, 'Ayesha', 'Odissa', 'Female', true),
      new Employee(5, 'smit', 'Pune', 'Male', true)

    ];

  }

    public getEmployees(): Observable<Employee[]> {

      return of(this.empdetails);



  }

  public getEmployeebyID(id: number): Observable<Employee> {
   const emp = this.empdetails.find(x => x.id === id);
   // const emp = this.empdetails.filter(x => x.id === id)[0];

   return of(emp);

  }


}

 

