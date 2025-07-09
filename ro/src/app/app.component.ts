// app.component.ts
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('growShrink', [
      state('small', style({
        transform: 'scale(1)',
        backgroundColor: 'lightblue'
      })),
      state('large', style({
        transform: 'scale(1.5)',
        backgroundColor: 'hotpink'
      })),
      transition('small <=> large', animate('500ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  boxState = 'small';

  toggleState() {
    this.boxState = this.boxState === 'small' ? 'large' : 'small';
  }
}