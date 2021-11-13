import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public list=[
    {"name":""}
  ]
getEmployee(){
  return this.list
}
  constructor() { }
}
