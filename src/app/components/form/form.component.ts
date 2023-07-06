import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() ToDoCreated: EventEmitter<ToDo>;

  newToDo: ToDo;

  constructor() {
    this.newToDo = new ToDo();
    this.ToDoCreated = new EventEmitter()
  }

  ngOnInit(): void {

  }

  onClick() {
    this.ToDoCreated.emit(this.newToDo);
    this.newToDo = new ToDo();
  }

}
