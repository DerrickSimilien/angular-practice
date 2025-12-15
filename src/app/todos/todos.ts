import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../services/todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})

export class TodosComponent implements OnInit { 
  todoService = inject(TodoService);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
  }
}

