import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todos: ToDo[];

  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {

  }
}
