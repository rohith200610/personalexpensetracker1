import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './Task.Model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost:3000/task";
  getTasks(task : Task[]) : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching tasks:', error);
        return throwError(() => new Error('Failed to fetch tasks'));
      })

    );
  } 
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(
      catchError((error) => {
        console.error('Error fetching task:', error);
        return throwError(() => new Error('Failed to add task'));
      })
    );
  }

  editTask(id:Number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);

  }

  deleteTask(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
