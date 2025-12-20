import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todos';
import type { Todo } from '../model/todo.type';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Todo[]>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
