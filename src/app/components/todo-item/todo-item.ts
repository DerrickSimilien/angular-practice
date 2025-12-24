import { Component, input, output } from '@angular/core';
import type { Todo } from '../../model/todo.type';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodo],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItemComponent {
  // Input signal (Angular 17 style)
  todo = input.required<Todo>();

  // Output signal
  todoToggled = output<Todo>();

  // ✅ THIS WAS MISSING
  onToggle() {
    const currentTodo = this.todo();

    this.todoToggled.emit({
      ...currentTodo,
      completed: !currentTodo.completed,
    });
  }
}
