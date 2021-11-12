import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  public list=[
    {"name":""}
  ]
getEmployee(){
  return this.list
}
  constructor() { }
}
