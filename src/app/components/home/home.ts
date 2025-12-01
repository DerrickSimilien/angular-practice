import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting';  // ✅ this path is correct based on your tree

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],        // ✅ Angular now knows this is a standalone component
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent { 

  message = signal('Welcome to the Home Component!');

}
