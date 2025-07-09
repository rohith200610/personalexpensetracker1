import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private userService: UserService) {}
 userName: string = ''; 
 status: string = 'active';
  
 addUser() {
 this.userService.addUser(this.userName, this.status);
 }
}
