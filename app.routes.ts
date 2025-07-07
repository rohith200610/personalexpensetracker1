import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'; // adjust as needed
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];
