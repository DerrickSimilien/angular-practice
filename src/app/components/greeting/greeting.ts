import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class GreetingComponent {
  message = input('Hello hello!');
}
