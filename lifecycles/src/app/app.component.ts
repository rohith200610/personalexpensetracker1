import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { StylingDirective } from './styling.directive';

@Component({
  selector: 'app-root',
  imports: [ChildComponent,CommonModule,StylingDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycles';
  showChild = true;
  constructor() {
    console.log('parent Component constructor called');
  }
  ngOnInit() {
    console.log('app component initialized');
  }
  ngOnChanges() {
    console.log('app component changes detected');
  }
  ngOnDestroy() {
    console.log('app component destroyed');
  }
  toggleChild() {
    this.showChild = !this.showChild;
  }
}
