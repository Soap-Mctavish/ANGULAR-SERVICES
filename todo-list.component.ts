import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public list:any=[]
  constructor(private emp1:TodoserviceService) { }

  ngOnInit(): void {
    this.list=this.emp1.getEmployee()
  }

}
