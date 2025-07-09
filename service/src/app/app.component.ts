import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service'; // Make sure this path is correct
// import { ParentComponent } from './parent/parent.component'; // Removed because the module does not exist
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule,AddUserComponent], // Removed ParentComponent as it does not exist
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]// Corrected property name
})
export class AppComponent implements OnInit {
  msg!: string;
  users: { name: string; status: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.users;
  }
}
