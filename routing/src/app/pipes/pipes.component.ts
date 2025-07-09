import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from './custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomPipePipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  currentData: Date = new Date();
  search: string = '';

  students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Doe', age: 21 },
    { name: 'Alice', age: 23 }
  ];
}

