import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users = [
    {name: 'John', status: 'active'},
    {name: 'Jane', status: 'active'},
    {name: 'Doe', status: 'inactive'},


  ]
  addUser(name: string, status: string) {
    this.users.push({name : name, status: status});
  }
}

