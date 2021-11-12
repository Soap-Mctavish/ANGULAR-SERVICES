import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  public employees=[
    {"name":""}
  ]
getEmployee(){
  return this.employees
}
  constructor() { }
}
