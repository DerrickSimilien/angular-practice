import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true,
})
export class HighlightCompletedTodo {
  isCompleted = input(false);

  private el = inject(ElementRef<HTMLElement>);

  stylesEffect = effect(() => {
    const nativeEl = this.el.nativeElement;

    if (this.isCompleted()) {
      nativeEl.style.textDecoration = 'line-through';
      nativeEl.style.backgroundColor = '#d3f9d8';
      nativeEl.style.color = '#2f855a';
    } else {
      nativeEl.style.textDecoration = 'none';
      nativeEl.style.backgroundColor = '#fff';
      nativeEl.style.color = '#000';
    }
  });
}
