import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  studentForm: FormGroup;
  students: any[] = []; 

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required]
    });
  }

getStu(){
  this.studentService.getStudents().subscribe((data) => 
    this.students = data
)
console.log(this.students);
}
 

  onSubmit() {
    console.log(this.studentForm.value);
  }
}
