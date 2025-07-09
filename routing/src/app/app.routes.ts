import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { pipe } from 'rxjs';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    {path: 'student-registration', component: StudentRegistrationComponent},
    { path: 'overView/:data', component: OverviewComponent },
    { path: 'home', component: HomeComponent, children: [
        { path: 'home1', component: Home1Component },
        { path: 'home2', component: Home2Component },
        // Assuming Home1Component is used for both home1 and home2
    ] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'pipes', component: PipesComponent},
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component')
            .then(m => m.DashboardComponent) // Lazy loading the dashboard component  
    }
];
