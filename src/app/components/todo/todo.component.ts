import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../modals/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todos: Todo[];
/**
 *
 */
  constructor(private todoService: TodoService) { }


  ngOnInit(): void {
    this.getTodos();
  }
  getTodos() {
    this.todoService.getTodos().subscribe(response => {
      this.todos = response
    })
  }
}
