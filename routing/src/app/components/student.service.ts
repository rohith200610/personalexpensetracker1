import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http : HttpClient){}

  apiUrl = 'http://localhost:3000/students'; // Example API URL
  
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}

