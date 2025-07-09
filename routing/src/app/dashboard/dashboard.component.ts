import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard', // Fixed selector to match naming convention
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html', // Fixed template file name
  styleUrls: ['./dashboard.component.css'] // Fixed property name and file name
})
export class DashboardComponent { // Fixed class name to match import
  user = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0
  }
  saveData(form: any) {
    if (form.valid) {
      console.log(form);
    }
    else {
      console.log("Form is invalid");
    }
  }
}