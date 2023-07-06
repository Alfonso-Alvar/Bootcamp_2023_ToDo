import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newToDo: ToDo;

  constructor() {
    this.newToDo = new ToDo();
  }

  ngOnInit(): void {

  }

}
