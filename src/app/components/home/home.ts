import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting';
import { CounterComponent } from '../counter/counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  homeMessage = '🔥 Hello, world!';

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
