import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})

export class TodosComponent { 
  todoService = inject(TodoService);
}

