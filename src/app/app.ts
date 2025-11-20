import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header />

    <main>
        <app-home />
    </main>
  `,
  styles: [`
    main {
      padding-inline: 16px;
    }
  `]
})
export class App {
  protected readonly title = signal('angular-practice');
}
