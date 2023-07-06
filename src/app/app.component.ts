import { Component } from '@angular/core';
import { ToDo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrToDos: ToDo[];

  constructor() {
    this.arrToDos = [];
  }

  onToDoCreated($event: any) {

    this.arrToDos.push($event);
  }
}
