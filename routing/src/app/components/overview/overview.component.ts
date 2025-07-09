import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  constructor(private route:ActivatedRoute) {
    const getData = route.snapshot.paramMap.get('data');
    console.log(getData); // This will log the 'data' parameter from the route
  }
    // Initialization logic can go here

}
