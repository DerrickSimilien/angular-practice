import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TodoService } from '../../services/todos';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  title = 'My first Angular app'}
