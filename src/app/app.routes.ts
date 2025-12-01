import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';  // ✅ use the components folder

export const routes: Routes = [
  { path: '', component: HomeComponent },
];
