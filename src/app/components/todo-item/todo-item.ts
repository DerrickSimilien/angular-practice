import { Component, input } from '@angular/core';
import type { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
}
