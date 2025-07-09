import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import id from '@angular/common/locales/id';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  students:any;
  studentForm:any={
    id: '',
    name: '',
    age: '',
    grade:'',
    email:''
  }
  constructor(private http:HttpClient,private service: StudentService){
    this.getStudents();
  }

  getData(){
    this.service.getStudents().subscribe({
      next:(res: any)=>{
        this.students=res;
      }
    })
  }
  addStudent(){
    this.http.post('http://localhost:3000/students',this.studentForm).subscribe({
      next:(res)=>{
        console.log("Student added");
        this.getStudents();
        
      },
      error:(er)=>{
        console.log(er)
      }
    })
  }
  getStudents(){
    this.http.get('http://localhost:3000/students').subscribe({
      next:(res)=>
      {
        this.students=res;
      }
      
    })
  }
  editStudent(student:any){
    this.studentForm= student;

   
  }  
  addUpdateStudent(){
    let requestBody=this.studentForm;
    console.log(requestBody)
    this.http.put(`http://localhost:3000/students/${this.studentForm.id}`,requestBody).subscribe({
     next:(res)=>{
      this.getStudents()
      
     }
    })
   
    
}
deleteStudent(id: string) {
  console.log(id);
  this.http.delete(`http://localhost:3000/students/${id}`).subscribe({
    next: (res) => {
      console.log(res);
      this.getStudents();
    },
    error: (err) => {
      console.error('Delete failed:', err);
    }
  });
}
}