import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet], // No imports needed for this component
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fixed property name: styleUrls (should be an array)
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigateToDB() {
    this.router.navigate(['/dashboard']);
  }
}
