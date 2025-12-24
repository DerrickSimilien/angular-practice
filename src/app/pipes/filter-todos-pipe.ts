import { Pipe, PipeTransform } from '@angular/core';
import type { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true,
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todo[] | null, searchTerm: string): Todo[] {
    if (!todos) return [];

    const term = (searchTerm ?? '').trim().toLowerCase();
    if (!term) return todos;

    return todos.filter((todo) => todo.title.toLowerCase().includes(term));
  }
}
