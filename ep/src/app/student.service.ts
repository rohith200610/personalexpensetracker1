import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
apiUrl= 'http://localhost:3000/students';
  constructor(private http:HttpClient) { 
    
  }
  getStudents() :Observable<any>{
    return this.http.get(this.apiUrl);
  } 
  addStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }
  editStudent(student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${student.id}`, student);
  }
  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  } 
}
